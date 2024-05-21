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
function generateExampleRowNew(table_row, base_path, filename_ext, models, col_offset) {
  for (var i = 0; i < models.length; i++) {
    let p = base_path + models[i] + '/' + filename_ext;
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
  let name = ['gSrU3mfTPYg_000032.wav', 'gwNC03n2xmg_000211.wav', 'jJ6FWcy7B6M_000052.wav', 'RpGRpTpEHTs_000109.wav', 'ZGYQX-172io_000022.wav']
  let models = ['gt', 'gt_voc', 'diff-foley', 'ours'];  
  
  for (var i = 0; i < 5; i++) {  
    generateExampleRowNew(table.rows[1 + i], 'data/table1_vggsound/', name[i], models, 0);  
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
generateTable1Landscape('landscape1-table')
generateTable2AIST('aist2-table')
generateTable2YT8M('yt8m2-table')
generateTable2Landscape('landscape2-table')


