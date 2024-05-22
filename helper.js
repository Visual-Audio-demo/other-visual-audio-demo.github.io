function createAudioHTML(path) {
  return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
      path +
      ' type="audio/wav">Your browser does not support the audio element.</audio>';
}
function createVideoHTML(path) {  
  return '<video controls class="px-1" width="320" height="240"> <source src="' +  
      path +  
      '" type="video/mp4">Your browser does not support the video tag.</video>';  
}
function generateExampleRowNewVideo(table_row, base_path, filename_ext, models, col_offset) {
  let p = base_path + models[0] + '/' + filename_ext + '.mp4';  
  let cell = table_row.cells[col_offset + 0]; 
  cell.innerHTML = cell.innerHTML + createVideoHTML(p);
  for (var i = 1; i < models.length; i++) {
    let p = base_path + models[i] + '/' + filename_ext + '.wav';  
    let cell = table_row.cells[col_offset + i];  
    cell.innerHTML = cell.innerHTML + createAudioHTML(p);  
  }
}
function generateTable1Vggsound(tableId) {  
  let table = document.getElementById(tableId);  
  let name = ['gSrU3mfTPYg_000032', 'gwNC03n2xmg_000211', 'jJ6FWcy7B6M_000052', 'RpGRpTpEHTs_000109', 'ZGYQX-172io_000022']
  let models = ['video', 'gt', 'gt_voc', 'diff-foley', 'ours'];  
  
  for (var i = 0; i < 5; i++) {  
    generateExampleRowNewVideo(table.rows[1 + i], 'data/table1_vggsound/', name[i], models, 0);  
  } 
} 

function generateTable1Landscape(tableId) {  
  let table = document.getElementById(tableId);  
  let name = ['1Ef9CAZ3OrQ_9993_10003', '1i79N_6wuIA_3290_3300', '2dkilldNRJE_3717_3727', 'g_2ioOlo0u5I_19826_19836','MZjZEVgQmno_21_31'];  
  let models = ['video', 'gt', 'gt_voc', 'diff-foley','mmdiffusion', 'ours']  
  
  for (var i = 0; i < 5; i++) {  
    generateExampleRowNewVideo(table.rows[1 + i], 'data/table1_landscape/', name[i], models, 0);  
  } 
} 

function generateTable2AIST(tableId) {  
  let table = document.getElementById(tableId);  
  let name = ['gBR_sBM_c01_d04_mBR0_ch02', 'gHO_sBM_c01_d21_mHO5_ch02', 'gJB_sBM_c01_d08_mJB5_ch02', 'gJB_sBM_c01_d09_mJB5_ch02','gKR_sBM_c01_d30_mKR2_ch02'];  
  let models = ['video', 'gt', 'gt_voc', 'lora','all', 'bs'] 
  
  for (var i = 0; i < 5; i++) {  
    generateExampleRowNewVideo(table.rows[1 + i], 'data/table2_aist/', name[i], models, 0);  
  } 
} 

function generateTable2YT8M(tableId) {  
  let table = document.getElementById(tableId);  
  let name = ['y-0m6sVZ7kss', 'y-1XvXK28_So', 'y-L2prOTjIPk', 'y-mwMtk9CMxs','y-Qni8ZE4Y8I'];  
  let models = ['video', 'gt', 'lora','all', 'bs'] 
  
  for (var i = 0; i < 5; i++) {  
    generateExampleRowNewVideo(table.rows[1 + i], 'data/table2_yt8m/', name[i], models, 0);
  } 
} 

function generateTable2Landscape(tableId) {  
  let table = document.getElementById(tableId);  
  let name = ['1Ef9CAZ3OrQ_9993_10003_0', '1i79N_6wuIA_3290_3300_0', 'g_2ioOlo0u5I_19826_19836_0', 'g-WrD5DwI6_4_8410_8420_0','MZjZEVgQmno_21_31_0'];  
  let models = ['video', 'lora','all', 'bs'] 
  
  for (var i = 0; i < 5; i++) {  
    generateExampleRowNewVideo(table.rows[1 + i], 'data/table2_landscape/', name[i], models, 0);
  } 
} 

generateTable1Vggsound('vggsound1-table')
generateTable1Landscape('landscape1-table')
generateTable2AIST('aist2-table')
generateTable2YT8M('yt8m2-table')
generateTable2Landscape('landscape2-table')


