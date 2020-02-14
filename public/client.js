
let classifier; 


const targetImage = document.getElementById('targetImage')
const classifyButton = document.getElementById('classifyButton')
const deleteButton = document.getElementById('deleteButton')
const classificationHeading = document.getElementById('classificationHeading')

fetch('https://imgclasss.herokuapp.com/test').then(response => {
    return response.json()
  })
  .then(json => {
    console.log(json)
})





classifyButton.addEventListener('click',() => {
    //omject image url value to img
    let imageUrl = document.getElementById('imageUrl').value
    var att = document.createAttribute("src");
    att.value = imageUrl;
    targetImage.setAttributeNode(att);

    // classify the image 
    classifier.classify(targetImage,(error, results) => {
        if(error) {
            console.error(error)
        } else {
            if(results.length > 0) {
                let result = results[0]
                classificationHeading.innerHTML = `i'm ${result.confidence}% sure this is a  ${result.label}`
                const toSend = {
                    label: result.label,
                    confidence: result.confidence,
                    image: imageUrl
                }
                const jsonString = JSON.stringify(toSend)
                const xhr = new XMLHttpRequest()
                xhr.open("POST", "https://imgclasss.herokuapp.com/send")
                xhr.setRequestHeader("Content-Type", "application/json")
                xhr.send(jsonString)

            }
            console.log(results)
        }
    })
})

function modelReady() {
    classifyButton.disabled = false 
    console.log('Model has been initialized...')
}

// this initializes the MobileNet Machine Learning Model
function initializeModel() {
    // We are using a callback function modelReady 
    // But you can also use Promises
    classifier = ml5.imageClassifier('MobileNet',modelReady)
}

initializeModel() 