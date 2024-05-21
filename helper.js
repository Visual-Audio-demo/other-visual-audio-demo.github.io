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

function generateStyle(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_txt.txt', '_gt.wav', '_prompt.wav', '_yourtts.wav', '_medium.wav'];
  for (var i = 0; i < 7; i++) {
    generateExampleRow(table.rows[1 + i], 'data/style/' + i, ext, 0);
  }
}

function generateEnergy(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_txt.txt', '_all.txt', '_gt.wav', '_medium.wav'];

  for (var i = 0; i < 6; i++) {
    generateExampleRow(table.rows[1 + i], 'data/energy/' + i, ext, 0);
  }
}

function generateSpeed(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_txt.txt', '_all.txt', '_gt.wav', '_base.wav','_medium.wav','_large.wav'];
  for (var i = 0; i < 6; i++) {
    generateExampleRow(table.rows[1 + i], 'data/speed/' + i, ext, 0);
  }
}

function generateEmotion(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_txt.txt', '_gt.wav', '_prompt.wav', '_yourtts.wav', '_base.wav','_medium.wav','_large.wav'];

  for (var i = 0; i < 5; i++) {
    generateExampleRow(table.rows[1 + i], 'data/emotion/' + i, ext, 0);
  }
}

function generateRegionAdd(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_txt.txt', '_raw.txt', '_new.txt', '_gt.wav', '_se.wav', '_a3t.wav', '_base.wav','_medium.wav','_large.wav'];

  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/Region-based/add/' + i, ext, 0);
  }
}

function generateRegionDelete(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_txt.txt', '_raw.txt', '_new.txt', '_gt.wav', '_se.wav', '_a3t.wav', '_base.wav','_medium.wav','_large.wav'];

  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/Region-based/delete/' + i, ext, 0);
  }
}

function generateRegionReplace(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_txt.txt', '_raw.txt', '_new.txt', '_gt.wav', '_se.wav', '_a3t.wav', '_base.wav','_medium.wav','_large.wav'];

  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/Region-based/replace/' + i, ext, 0);
  }
}

function generateFreeRegionAdd(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_txt.txt', '_raw.txt', '_new.txt', '_gt.wav', '_se.wav', '_a3t.wav', '_base.wav','_medium.wav','_large.wav'];

  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/Region_free/add/' + i, ext, 0);
  }
}

function generateFreeRegionDelete(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_txt.txt', '_raw.txt', '_new.txt', '_gt.wav', '_se.wav', '_a3t.wav', '_base.wav','_medium.wav','_large.wav'];

  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/Region_free/delete/' + i, ext, 0);
  }
}

function generateFreeRegionReplace(tableId) {
  let table = document.getElementById(tableId);
  let ext = ['_txt.txt', '_raw.txt', '_new.txt', '_gt.wav', '_se.wav', '_a3t.wav', '_base.wav','_medium.wav','_large.wav'];

  for (var i = 0; i < 4; i++) {
    generateExampleRow(table.rows[1 + i], 'data/Region_free/replace/' + i, ext, 0);
  }
}

function generatePipeline(tableId) {  
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

generateStyle('style-conversion-table')
generateEnergy('Energy-conversion-table')
generateSpeed('Speed-conversion-table')
generateEmotion('emotion-conversion-table')
generateRegionAdd('add-region-based-table')
generateRegionDelete('delete-region-based-table')
generateRegionReplace('replace-region-based-table')
generateFreeRegionAdd('add-region-free-table')
generateFreeRegionDelete('delete-region-free-table')
generateFreeRegionReplace('replace-region-free-table')
generatePipeline('pipeline-table')


