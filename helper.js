function createAudioHTML(path) {
  return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
      path +
      ' type="audio/wav">Your browser does not support the audio element.</audio>';
}


function generateExampleRow(table_row, base_path, filename_ext, col_offset) {
  for (var i = 0; i < filename_ext.length; i++) {
    let p = base_path + filename_ext[i];
    let cell = table_row.cells[col_offset + i];
    // console.log(table_row.cells.length)
    if (p.endsWith('txt')) {
      var req = new XMLHttpRequest();
      req.open("GET", p, false);
      req.send(null);
      cell.innerHTML = '<font size="-1">' + req.responseText + '</font>';
    } else {
      cell.innerHTML = cell.innerHTML + createAudioHTML(p);
    }
  }
}

function generateExampleRowCross(table_row, base_path, filename_ext, col_offset) {
  for (var i = 0; i < filename_ext.length; i++) {
    let p = base_path + filename_ext[i];
    if (i === 1) {
      col_offset = col_offset + 1
    } 

    let cell = table_row.cells[col_offset + i];
    // console.log(table_row.cells.length)
    if (p.endsWith('txt')) {
      var req = new XMLHttpRequest();
      req.open("GET", p, false);
      req.send(null);
      cell.innerHTML = '<font size="-1">' + req.responseText + '</font>';
    } else {
      cell.innerHTML = cell.innerHTML + createAudioHTML(p);
    }
  }
}

function generateTable1Vggsound(tableId) {  
  let table = document.getElementById(tableId);  
  let ext = ['_gt.wav', '_emotion.wav', '_style.wav', '_speed.wav','_energy.wav','_semantic.wav'];  
  let ext1 = ['_gt.txt','_emotion.txt','_style.txt','_speed.txt','_energy.txt','_semantic.txt']  
  
  for (var i = 0; i < 4; i++) {  
    if (i % 2 === 0) {  
      generateExampleRow(table.rows[1 + i], 'data/pipeline/' + i, ext, 0);  
    } else {  
      generateExampleRow(table.rows[1 + i], 'data/pipeline/' + i, ext1, 0);  
    }  
  } 
} 

function generateTable1Landscape(tableId) {  
  let table = document.getElementById(tableId);  
  let ext = ['_gt.wav', '_emotion.wav', '_style.wav', '_speed.wav','_energy.wav','_semantic.wav'];  
  let ext1 = ['_gt.txt','_emotion.txt','_style.txt','_speed.txt','_energy.txt','_semantic.txt']  
  
  for (var i = 0; i < 4; i++) {  
    if (i % 2 === 0) {  
      generateExampleRow(table.rows[1 + i], 'data/pipeline/' + i, ext, 0);  
    } else {  
      generateExampleRow(table.rows[1 + i], 'data/pipeline/' + i, ext1, 0);  
    }  
  } 
} 

function generateTable2AIST(tableId) {  
  let table = document.getElementById(tableId);  
  let ext = ['_gt.wav', '_emotion.wav', '_style.wav', '_speed.wav','_energy.wav','_semantic.wav'];  
  let ext1 = ['_gt.txt','_emotion.txt','_style.txt','_speed.txt','_energy.txt','_semantic.txt']  
  
  for (var i = 0; i < 4; i++) {  
    if (i % 2 === 0) {  
      generateExampleRow(table.rows[1 + i], 'data/pipeline/' + i, ext, 0);  
    } else {  
      generateExampleRow(table.rows[1 + i], 'data/pipeline/' + i, ext1, 0);  
    }  
  } 
} 

function generateTable2YT8M(tableId) {  
  let table = document.getElementById(tableId);  
  let ext = ['_gt.wav', '_emotion.wav', '_style.wav', '_speed.wav','_energy.wav','_semantic.wav'];  
  let ext1 = ['_gt.txt','_emotion.txt','_style.txt','_speed.txt','_energy.txt','_semantic.txt']  
  
  for (var i = 0; i < 4; i++) {  
    if (i % 2 === 0) {  
      generateExampleRow(table.rows[1 + i], 'data/pipeline/' + i, ext, 0);  
    } else {  
      generateExampleRow(table.rows[1 + i], 'data/pipeline/' + i, ext1, 0);  
    }  
  } 
} 

function generateTable2Landscape(tableId) {  
  let table = document.getElementById(tableId);  
  let ext = ['_gt.wav', '_emotion.wav', '_style.wav', '_speed.wav','_energy.wav','_semantic.wav'];  
  let ext1 = ['_gt.txt','_emotion.txt','_style.txt','_speed.txt','_energy.txt','_semantic.txt']  
  
  for (var i = 0; i < 4; i++) {  
    if (i % 2 === 0) {  
      generateExampleRow(table.rows[1 + i], 'data/pipeline/' + i, ext, 0);  
    } else {  
      generateExampleRow(table.rows[1 + i], 'data/pipeline/' + i, ext1, 0);  
    }  
  } 
} 

generateTable1Vggsound('vggsound1-table')
generateTable1Landscape('table1-landscape')
generateTable2AIST('table2-aist')
generateTable2YT8M('table2-yt8m')
generateTable2Landscape('table2-landscape')


