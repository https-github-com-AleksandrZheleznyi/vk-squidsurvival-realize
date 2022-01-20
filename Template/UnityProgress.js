let filledProgress = null;
function UnityProgress(progress)
{
  if(!filledProgress)
  {
      filledProgress = document.getElementById("loader-progress__filled");
      filledProgress.style.display = "block";
  }

  setLoaderProgressTo(progress);

  if (progress == 1)
  {
    console.log('--End load the page!--');
    document.getElementById("loader").style.display = "none";
  }
}

// value - 0 to 1
function setLoaderProgressTo(value)
{
  filledProgress.animate(
      [
        { width: (value * 100) + "%" }
      ],
      {
        duration: 300,
        fill: "forwards"
      }
  );
}

window.onlanguagechange = function(event) 
{
  loadLoaderLocalization();
};

window.addEventListener('load', (event) => {
  loadLoaderLocalization();
  setLoaderProgressTo(0);
});

function loadLoaderLocalization() 
{
  const label = document.getElementById("loader-area__label");
  label.innerHTML = GetLoadingScreenLocalization().value;
}
