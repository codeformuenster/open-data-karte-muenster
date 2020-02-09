const mapColors = [
  "#FFFFFF",
  "#FFF1D5",
  "#FFE4AB",
  "#FFD781",
  "#FFCA57",
  "#FFBD2E",
  "#EE9724",
  "#DE711B",
  "#CD4B12",
  "#BD2509",
  "#AD0000"
];

// the order will be the order in the frontend
// the data sets are given in 'data/categories'
const dataCategories = [
  'wohnberechtigte',
  'wohnberechtigte_m',
  'wohnberechtigte_w',
  'einkommen',
  'arbeitslose',
  'haushalte',
];

let openData = {};
let jsonCalls = [];
for (let dataCategory of dataCategories)
  jsonCalls.push($.getJSON('data/categories/' + dataCategory + '.json', function (result) {
    openData[dataCategory] = result;
  }));

// this is all in 'done' because $.when and await do not really work together: https://stackoverflow.com/a/48979333
$.when.apply($, jsonCalls).done(function() {
  let dataSet = function () {
    let currentDataSet = 'undef';
    let currentSubSet = 0;

    function selectDataSet(dsname) {
      if (!dsname)
        dsname = dataCategories[0] + "-" + [0];

      let myArray = /^(.+)-(\d+)$/g.exec(dsname);
      currentDataSet = myArray ? myArray[1] : dsname;
      currentSubSet = myArray ? myArray[2] : openData[dsname].default;
      if (!openData[currentDataSet].headlines[currentSubSet]) {
        location.href = "?";
      }
      showDataSelector();
    }

    function getDataSet() {
      return openData[currentDataSet];
    }

    function getTitle() {
      return openData[currentDataSet].title + " " + openData[currentDataSet].headlines[currentSubSet];
    }

    function getUnit() {
      return openData[currentDataSet].unit;
    }

    let limits = [];

    function getLimits() {
      let max = 0;
      if (limits.length < 2) {
        let dataRelative = 'absolute';
        if (location.search.substr(1).split('&').length > 1)
          dataRelative = location.search.substr(1).split('&')[1];

        if (dataRelative === 'absolute')
        {
          $.each(openData[currentDataSet].data, function (key, arr) {
            if (max < arr[currentSubSet])
              max = arr[currentSubSet];
          });

          let numsteps = 10;
          let step = max / numsteps;
          for (let i = 0; i < numsteps; i++)
            limits[i] = Math.floor(i * step);
        }
        else
        {
          $.each(openData[currentDataSet].data, function (key, arr) {
            if (max < getPercent(key))
              max = getPercent(key);
          });

          let numsteps = 10;
          let step = max / numsteps;
          for (let i = 0; i < numsteps; i++)
            limits[i] = Math.floor(i * step * 10) / 10;
        }
      }
      return limits;
    }

    function getPercentOf() {
      return openData[currentDataSet].percent_of;
    }

    function getDataItem(stadtteilNr) {
      return openData[currentDataSet]['data'][stadtteilNr][currentSubSet];
    }

    function getPercent(stadtteilNr) {
      if (!stadtteilNr) {
        alert("need stadtteiNr");
      }
      let referenceDataSet = openData[currentDataSet].percent_of;
      if (referenceDataSet) {
        let referenceSubset = currentSubSet;
        if (referenceDataSet.indexOf('-') > 0) {
          let temp = referenceDataSet.split('-');
          referenceDataSet = temp[0];
          referenceSubset = temp[1];
        }
        console.log("stadtteilNr", stadtteilNr);
        console.log("currentData&Subset", currentDataSet, currentSubSet);
        console.log("referenceData&Subset", referenceDataSet, referenceSubset);

        let percentValue = openData[currentDataSet]['data'][stadtteilNr][currentSubSet] / openData[referenceDataSet]['data'][stadtteilNr][referenceSubset] * 100;
        return parseFloat(percentValue.toFixed(2));
      } else {
        return ""
      }
    }

    function getDataTable(stadtteilNr) {
      let table = {};
      let lastVal = 0;
      let hls = openData[currentDataSet].headlines;
      for (let i = 0; i < hls.length; i++) {
        if (hls[i]) {
          let currentVal = openData[currentDataSet]['data'][stadtteilNr][i];
          let change = lastVal ? currentVal - lastVal : 0;
          table[hls[i]] = [currentVal, change, (i === currentSubSet ? 1 : 0)];
          lastVal = currentVal;
        }
      }
      return table;
    }

    function getDataItemColor(stadtteilNr) {
      let dataRelative = 'absolute';
      if (location.search.substr(1).split('&').length > 1)
        dataRelative = location.search.substr(1).split('&')[1];

      let currentVal;
      if (dataRelative === 'absolute')
        currentVal = getDataItem(stadtteilNr);
      else
        currentVal = getPercent(stadtteilNr);

      let a = getLimits();
      let len = a.length;
      let currentNr = len - 1;
      for (let i = 0; i < len; i++) {
        if (currentVal <= a[i]) {
          currentNr = i - 1;
          break;
        }
      }
      return mapColors[currentNr];
    }

    // list all datasets for "select dataset" popup
    function showDataSelector() {
      const dataSelector = $("#dataSelector");

      $.each(openData, function (key, arr) {
        let select_html = '<select class="selector-d form-control input-lg"><option value=""> Auswahl </option>';

        let len = arr.headlines.length;
        for (let i = 0; i < len; i++) {
          if (!arr.headlines[i])
            continue;

          let thiskey = key + "-" + i;
          select_html += '<option value="' + thiskey + '" ' +
            (thiskey === (currentDataSet + '-' + currentSubSet) ? "selected" : "") + '> ' + arr.headlines[i] + '</option>';
        }
        select_html += '</select>';

        dataSelector.append('<div class="hover-' + key + ' row topmargin">' +
          '<div class="col-md-8">' +
          '<button type="button" data-id="' + key + '" class="selector btn ' +
          ((currentDataSet === key) ? "btn-primary" : "btn-default") + ' btn-lg btn-block">' + arr.title + '</button>' +
          '</div><div class="col-md-4">' + select_html + '</div></div>');

        if (arr.description) {
          let classname = 'show-' + key;
          dataSelector.append('<div class="row hide-i ' + classname + '"><div class="col-md-12">' + arr.description + '</div></div>');
          $('.hover-' + key).hover(
            function () { $('.' + classname).fadeIn(); },
            function () { $('.' + classname).fadeOut(); }
          );
          $("." + classname).hide();
        }

      });
      dataSelector.append('<br clear="both" />');
      $(".selector").click(function () {
        location.href = "?" + $(this).data('id');
      });
      $(".selector-d").change(function () {
        location.href = "?" + $(this).val();
      });
      console.log("selected dataset", currentDataSet, currentSubSet);
    }

    return {
      getUnit: getUnit,
      getTitle: getTitle,
      getLimits: getLimits,
      getPercent: getPercent,
      getDataSet: getDataSet,
      getDataItem: getDataItem,
      getDataTable: getDataTable,
      selectDataSet: selectDataSet,
      getDataItemColor: getDataItemColor,
      getPercentOf: getPercentOf,
    };
  }();

  let showData = location.search.substr(1).split('&')[0];
  if (!showData)
    $('#myModal').modal('show');

  dataSet.selectDataSet(showData);

  function getColor(i) {
    return mapColors[i];
  }

  let map = L.map('map').setView([51.962, 7.629], 11);

  L.tileLayer(
    'http://{s}.tiles.mapbox.com/v3/tomrocket.m8l1e9gm/{z}/{x}/{y}.png', {
      maxZoom: 16,
      minZoom: 11,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    }
  ).addTo(map);


// control that shows state info on hover
  let info = L.control();

  info.onAdd = function () {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
  };

  info.update = function (props) {
    let html = '<strong>' + dataSet.getTitle() + '</strong>';

    if (props) {
      let percent = dataSet.getPercent(props.Nr);
      if (percent !== '')
        percent =  "(" + percent + "%)";

      html += '<b>' + props.Name + '</b><br/>' + dataSet.getDataItem(props.Nr) + ' ' + dataSet.getUnit() + ' ' + percent;
    }
    else
      html += 'Navigieren Sie über einen Stadtteil';
    this._div.innerHTML = html;
  };
  info.addTo(map);

  let extraInfo = L.control({position: 'bottomleft'});
  extraInfo.onAdd = function () {
    this._div = L.DomUtil.create('div', 'extras');
    this.update();
    return this._div;
  };
  extraInfo.update = function (props) {
    let html = '';

    console.log("props", props);
    // draw nice history/detail table
    if (props) {
      let hls = dataSet.getDataTable(props.Nr);
      let tbl = dataSet.getDataSet();
      let htitle = tbl.tableTitle || "Historie";
      html += '<div class="history">' + htitle + '</div> <table>';
      $.each(hls, function (key, value) {
        html += value[2] ? '<tr class="high">' : '<tr>';
        html += '<td>' + key + ':</td><th>' + value[0] + '</th>';
        if (tbl.extra === "showChange") {
          html += '<td class="change ' + (value[1] > 0 ? "green" : "red") + '">' + (value[1] ? (value[1] > 0 ? '+' : '') + value[1] : '') + '</td>';
        }
        html += '</tr>';
      });
      html += '</table>';
    }
    this._div.innerHTML = html;
  };
  extraInfo.addTo(map);

  function style(feature) {
    return {
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
      fillColor: dataSet.getDataItemColor(feature.properties.Nr)
    };
  }

  function highlightFeature(e) {
    let layer = e.target;

    layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
      layer.bringToFront();
    }

    info.update(layer.feature.properties);
    extraInfo.update(layer.feature.properties);
  }

  let geojson;

  function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
  }


  function onEachFeature(feature, layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: clickUpdate
    });
  }

  let lastClickedLayer;

//To make it work on touch devices
  function clickUpdate(e) {

    if (lastClickedLayer) {

      resetHighlight(lastClickedLayer);

      if (e.target._leaflet_id === lastClickedLayer.target._leaflet_id) {
        lastClickedLayer = undefined;
      } else {
        lastClickedLayer = e;
        highlightFeature(e);
      }

    } else {
      lastClickedLayer = e;
      highlightFeature(e);
    }

  }


  geojson = L.geoJson(stadtteileMuenster2, {
    style: style,
    onEachFeature: onEachFeature
  }).addTo(map);

  map.attributionControl.addAttribution('Jahresstatistiken &copy; <a href="http://www.muenster.de/stadt/stadtplanung/zahlen.html">Stadt Münster</a>');

  let legend = L.control({position: 'bottomright'});

  legend.onAdd = function () {
    let div = L.DomUtil.create('div', 'info legend'),
      grades = dataSet.getLimits(),
      labels = [],
      from, to;

    for (let i = 0; i < grades.length; i++) {
      from = grades[i];
      to = grades[i + 1];

      labels.push('<i style="background:' + getColor(i) + '"></i> ' + from + (to ? '&ndash;' + to : '+'));
    }

    let relativeSwitcher = '';
    if (dataSet.getPercentOf()) {
      let dataRelative = 'absolute';
      if (location.search.substr(1).split('&').length > 1)
        dataRelative = location.search.substr(1).split('&')[1];

      relativeSwitcher = '<label class="radio-label">' +
      '<input type="radio" name="dataRelative" value="absolute"' + (dataRelative === 'absolute' ? 'checked' : '') + '>' +
      'absolut' +
      '</label>' +
      '<label class="radio-label">' +
      '<input type="radio" name="dataRelative" value="relative"' + (dataRelative === 'relative' ? 'checked' : '') + '>' +
      'relativ' +
      '</label>' +
      '<br>';
    }
    div.innerHTML = relativeSwitcher +
      labels.join('<br>') +
      '<button type="button" class="changer btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Datensatz ändern</button>';

    return div;
  };

  legend.addTo(map);

  // add eventlistener for change
  $('input[name="dataRelative"]').on('change', function () {
    const set = location.search.substr(1).split('&')[0];
    location.href = '?' + set + '&' + $('input[name="dataRelative"]:checked').val();
  });
}).fail(function (error) {
  alert('Error while reading data:' + JSON.stringify(error));
});
