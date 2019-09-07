    const inp = document.querySelector("input");
    const addTaskBtn = document.querySelector("button");
    const list = document.querySelector("ul");
    const checkBox = document.getElementById ("first");
     const delTsk = document.getElementById ("delete");
    
    function getInputValue(inputElement){
        return inputElement.value;
        
    }
    function createElementWithText (elementName, text) {
        elemName = document.createElement(elementName);
        elemName.textContent = text;
        return elemName;

    }
    function appendChildTodo (parent, child) {
        parent.appendChild (child);
        
    }
    addTaskBtn.addEventListener('click', ()=> {
        
        if (getInputValue(inp)) { 
            let child = createElementWithText('li', getInputValue(inp));
            if (checkBox.checked) {
                list.insertBefore(child, list.firstChild);
            }
            else  {
            appendChildTodo (list, child);
        }
            }
    });
    delTsk.addEventListener('click', ()=> {
        list.removeChild(list.lastElementChild);
    });