console.log("script loaded");

const buttons = document.querySelectorAll(".btn");
console.log(buttons, typeof buttons);
let equalPressed = false;
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (equalPressed) {
      document.querySelector(".screen").textContent = " ";
      equalPressed = false;
    }
    if (
      event.target.textContent === "+" ||
      event.target.textContent === "-" ||
      event.target.textContent === "*" ||
      event.target.textContent === "/" ||
      event.target.textContent === "^" ||
      event.target.textContent === "%"
    ) {
      document.querySelector(
        ".screen"
      ).textContent += `${event.target.textContent}`;
    } else if (event.target.textContent === "sqrt") {

      if (
        document.querySelector(".screen").textContent.includes("(") &&
        document.querySelector(".screen").textContent.includes(")")
      ) {
        document.querySelector(".screen").textContent = document
          .querySelector(".screen")
          .textContent.replaceAll("(", "");

        console.log(document.querySelector(".screen").textContent);

        document.querySelector(".screen").textContent = document
          .querySelector(".screen")
          .textContent.replaceAll(")", "");
      
          document.querySelector(".screen").textContent = Math.sqrt(
            Number(document.querySelector(".screen").textContent)
          ).toFixed(4);
          equalPressed = true;
        }
        else{
      document.querySelector(".screen").textContent = Math.sqrt(
        Number(document.querySelector(".screen").textContent)
      ).toFixed(4);
      equalPressed = true;
        }
    } else if (event.target.textContent === "DEL") {
      document.querySelector(".screen").textContent = document
        .querySelector(".screen")
        .textContent.slice(
          0,
          document.querySelector(".screen").textContent.length - 1
        );
    } else if (event.target.textContent === "AC") {
      document.querySelector(".screen").textContent = " ";
    } else if (event.target.textContent === "cbrt") {
      if (
        document.querySelector(".screen").textContent.includes("(") &&
        document.querySelector(".screen").textContent.includes(")")
      ) {
        document.querySelector(".screen").textContent = document
          .querySelector(".screen")
          .textContent.replaceAll("(", "");

        console.log(document.querySelector(".screen").textContent);

        document.querySelector(".screen").textContent = document
          .querySelector(".screen")
          .textContent.replaceAll(")", "");

          document.querySelector(".screen").textContent = Math.cbrt(
            Number(document.querySelector(".screen").textContent)
          ).toFixed(4);
          equalPressed = true;
      }
      else{
      document.querySelector(".screen").textContent = Math.cbrt(
        Number(document.querySelector(".screen").textContent)
      ).toFixed(4);
      equalPressed = true;
      }
    } else if (event.target.textContent === "exp") {
      if (
        document.querySelector(".screen").textContent.includes("(") &&
        document.querySelector(".screen").textContent.includes(")")
      ) {
        document.querySelector(".screen").textContent = document
          .querySelector(".screen")
          .textContent.replaceAll("(", "");

        console.log(document.querySelector(".screen").textContent);

        document.querySelector(".screen").textContent = document
          .querySelector(".screen")
          .textContent.replaceAll(")", "");

        console.log(document.querySelector(".screen").textContent);
        document.querySelector(".screen").textContent = Math.exp(
          Number(document.querySelector(".screen").textContent)
        ).toFixed(2);
        equalPressed = true;
      } else {
        document.querySelector(".screen").textContent = Math.exp(
          Number(document.querySelector(".screen").textContent)
        ).toFixed(2);
        equalPressed = true;
      }
    } else if (event.target.textContent === "log10") {



      if (
        document.querySelector(".screen").textContent.includes("(") &&
        document.querySelector(".screen").textContent.includes(")")
      ) {
        document.querySelector(".screen").textContent = document
          .querySelector(".screen")
          .textContent.replaceAll("(", "");

        console.log(document.querySelector(".screen").textContent);

        document.querySelector(".screen").textContent = document
          .querySelector(".screen")
          .textContent.replaceAll(")", "");
          document.querySelector(".screen").textContent = Math.log10(
            Number(document.querySelector(".screen").textContent)
          ).toFixed(6);
          equalPressed = true;
        }
        else{
      document.querySelector(".screen").textContent = Math.log10(
        Number(document.querySelector(".screen").textContent)
      ).toFixed(6);
      equalPressed = true;
       }
    } else if (
      event.target.textContent === "=" ||
      event.target.textContent === "ans"
    ) {
      let screenValue = document.querySelector(".screen").textContent;

      if (screenValue.includes("^")) {
        
        let arr = document.querySelector(".screen").textContent.split("^");
        if(arr[1].includes("/")){
            let arrval = arr[1].split("/")
            let arrvalfirst = arrval[0]
            let arrvalSecond = arrval[1]
            let arrfinal = Number(arrvalfirst) / Number(arrvalSecond) 
           
            //v
            if(arr[0].includes("-")){
              
              let arrval = arr[0].replace("-","")
              let arrvalf = arrval
            
      
              document.querySelector(".screen").textContent = (-1) * Math.pow(
                Number(arrvalf),
                Number(arrfinal)
              ).toFixed(7);
              equalPressed = true;
              return;
            }

            document.querySelector(".screen").textContent = Math.pow(
              Number(arr[0]),
              Number(arrfinal)
            ).toFixed(8);
            equalPressed = true;
            return;
        } 

        else if(arr[0].includes("/")){
          let arrval = arr[0].split("/")
          let arrvalfirst = arrval[0]
          let arrvalSecond = arrval[1]
          let arrfinal = Number(arrvalfirst) / Number(arrvalSecond) 

          document.querySelector(".screen").textContent = Math.pow(
            Number(arrfinal),
            Number(arr[1])
          ).toFixed(7);
          equalPressed = true;
          return;
      } 

     

      else{

        
        document.querySelector(".screen").textContent = Math.pow(
          Number(arr[0]),
          Number(arr[1])
        ).toFixed(5);
        equalPressed = true;
        return;
        }
      
      }

      //equalPressed = false;
      //return;

      document.querySelector(".screen").textContent =
        eval(screenValue).toFixed(4);
      equalPressed = true;
    } else {
      document.querySelector(".screen").textContent += event.target.textContent;
    }
  });
});
