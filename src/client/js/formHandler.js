// Replace checkForName with a function that checks the URL
import { checkForName } from "./nameChecker";

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = "http://localhost:8000/api";

const form = document.getElementById("urlForm");
form.addEventListener("submit", handleSubmit);
const results = document.getElementById("results");

async function handleSubmit(event) {
  event.preventDefault();

  try { 
      const formText = document.getElementById("name");
    
      if (checkForName(formText.value)) {
        const response = await fetch(serverURL, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: formText.value,
        });
        const responseData = await response.json();
        results.innerHTML = `
                <p>Agreement: ${responseData.agreement} </p>
                <p>Subjectivity: ${responseData.subjectivity} </p>
                <p>Confidence: ${responseData.confidence} </p>
                <p>Irony: ${responseData.irony} </p>
             `;
        console.log(responseData);
      } else {
        console.log('url is wrong')
      }
  } catch(err) {
    console.log(err)
  }
}

export { handleSubmit };
