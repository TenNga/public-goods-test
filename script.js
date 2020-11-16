//Make sure all the DOM is setup before JS

//Hold user click value as global 
const CLICK_STATUS = false;


window.addEventListener('DOMContentLoaded', () => {

    //helper function
    const closePopup = () => {
        const popUp = document.querySelector('#popup');
            popUp.style.display = "none";
    }


    //on each visit to the page check if user clicked on claim before
    const checkIfUserClickedClaimBefore = () => {
        if(window.localStorage.getItem('claimStatus')){
            closePopup();
        }

    }

    //add animation on ease-in and out 
    const popupAfterFiveSecond = () => {
        const popUp = document.querySelector('#popup')
        setTimeout(() => {
            console.log("heeloo")
        }, 5000);
    }

    //callback function when user click on X button
    handleClaimClose = () => {
        closePopup();
        //console.log(popUp.classList)
    }
    
    //when user click on "Claim Now" button, store value in local storage
    handleClaimNow = () => {
        window.localStorage.setItem('claimStatus', true);
        closePopup();
    }

popupAfterFiveSecond();
checkIfUserClickedClaimBefore();
});