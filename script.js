
const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// Prompt a user to selct media screen, pass to video Element and play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onLoadedData = () => {
            videoElement.play();
        }
    } catch (err) {
        console.log('Whoops! Error Here : ', err);
    }

}
button.addEventListener('click', async () => {


    //Disable Button 
    button.disabled = true;
    // Starting Picture in picture
    await videoElement.requestPictureInPicture();
    //Enabling the button after start
    button.disabled = false;

});

//On Load
selectMediaStream();


