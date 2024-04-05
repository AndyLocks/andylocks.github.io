var text
var button
var input
const encryptedMessage = "U2FsdGVkX1/Eo3uDxOFtizX+XwfwPzD8E8oQG23tkYMFG87h5G4XqipqtdhCr01vLPlY/0m507F2sl+zGyw9vuA5EqqvyetKWxOneQpG4vVday9WmXe6jUPH/EJRLk7mCjpwW5h4XSVRddODrqHf2VIELHUIhFQ2eGnU7dHnMSaaeY73t6lT5ZFTDLbOL6rU";
function buttonClick() {}
window.onload = function() {
    text = document.getElementById('more_info_text')
    button = document.getElementById('more_info_button')
    input = document.getElementById('more_info_input')
    
    buttonClick = function() {
        var password = input.value
        input.value = ''

        var decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, password);
        var decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);

        text.innerHTML = decryptedMessage
    }
}

