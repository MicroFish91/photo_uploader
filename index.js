const reader = new FileReader();
const imgFile = document.querySelector('#imgFile');
const imgPreview = document.querySelector('#imgPreview');
const imgForm = document.querySelector('#imgForm');

imgFile.addEventListener('change', function(e){
  const selectedFile = imgFile.files[0];
  if (selectedFile) {
    reader.addEventListener('loadend', function(e){
      imgPreview.src = reader.result;
    });
    reader.readAsDataURL(selectedFile);
  }
})

imgForm.addEventListener('submit', function(e){
  e.preventDefault();
  console.log(reader.result);
  // fetch post reader.result to database
})