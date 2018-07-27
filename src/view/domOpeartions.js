

module.exports = class DomOperations {


    clearAllWidgets() {
        
    }

    createHTMLElement(html) {
        debugger;
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content.firstElementChild;
      }

      setResponseForCreateRepo(element,w_id,b_id){
          var command = element.command;
          var myArray=element.data;
        const viewRepoData = this.createHTMLElement(`
        <div id='${w_id}' class="widget">    
            <h5 class="card-title">Response For Command: ${command} <a class="close" id="${b_id}"><h6>x</h6></a></h5>
            

            <table class="table table-bordered table-striped table-hover">
            <tr>
            <td>Repo Name</td>
            <td>${myArray.name}</td>
            </tr>
            
            <tr>
            <td>Repo Desc</td>
            <td>${myArray.description}</td>
            </tr>
            
            <tr>
            <td>Repo Id</td>
            <td>${myArray.id}</td>
            </tr>
            
            <tr>
            <tdRepo Clone Url</td>
            <td${myArray.clone_url}</td>
            </tr>

            <tr>
            <td>Repo Owner Id</td>
            <td>Login</td>
            </tr>
              
            </table>
        
        </div>
        `);  
    
     return viewRepoData;
      }

      setResponseForCreateIssue(element,w_id,b_id){
        var command = element.command;
        var myArray=element.data;
      const viewRepoData = this.createHTMLElement(`
      <div id='${w_id}' class="widget">    
          <h5 class="card-title">Response For Command: ${command} <a class="close" id="${b_id}"><h6>x</h6></a></h5>
          

          <table class="table table-bordered table-striped table-hover">
          <tr>
          <td>Issue Title</td>
          <td>${myArray.title}</td>
          </tr>
          
          <tr>
          <td>Issue Body</td>
          <td>${myArray.body}</td>
          </tr>
          
          <tr>
          <td>Issue URL</td>
          <td>${myArray.url}</td>
          </tr>
          
          <tr>
          <td>Assignee Login</td>
          <td>${myArray.assignee.login}</td>
          </tr>
            
          </table>
      
      </div>
      `);  
  
   return viewRepoData;
    }

    setResponseForCloseIssue(element,w_id,b_id){
        var command = element.command;
        var myArray=element.data;
      const viewRepoData = this.createHTMLElement(`
      <div id='${w_id}' class="widget">    
          <h5 class="card-title">Response For Command: ${command} <a class="close" id="${b_id}"><h6>x</h6></a></h5>
          

          <table class="table table-bordered table-striped table-hover">
          <tr>
          <td>Issue Number</td>
          <td>${myArray.number}</td>
          </tr>

          <tr>
          <td>Issue Title</td>
          <td>${myArray.title}</td>
          </tr>
          
          <tr>
          <td>Issue Body</td>
          <td>${myArray.body}</td>
          </tr>
          
          
          
          <tr>
          <td>State Of Issue</td>
          <td>${myArray.state}</td>
          </tr>
            
          </table>
      
      </div>
      `);  
  
   return viewRepoData;
    }
    
    setResponseForAddComment(element,w_id,b_id){
        var command = element.command;
        var myArray=element.data;
      const viewRepoData = this.createHTMLElement(`
      <div id='${w_id}' class="widget">    
          <h5 class="card-title">Response For Command: ${command} <a class="close" id="${b_id}"><h6>x</h6></a></h5>
          

          <table class="table table-bordered table-striped table-hover">
          <tr>
          <td>Comment Id</td>
          <td>${myArray.id}</td>
          </tr>

          <tr>
          <td>Comment Body</td>
          <td>${myArray.body}</td>
          </tr>
          
          <tr>
          <td>Comment URL</td>
          <td>${myArray.issue_url}</td>
          </tr>              
            
          </table>
      
      </div>
      `);  
  
   return viewRepoData;
    }

    setResponseForAddCollaborator(element,w_id,b_id){
        var command = element.command;
        var myArray=element.data;
      const viewRepoData = this.createHTMLElement(`
      <div id='${w_id}' class="widget">    
          <h5 class="card-title">Response For Command: ${command} <a class="close" id="${b_id}"><h6>x</h6></a></h5>
          

          <table class="table table-bordered table-striped table-hover">
          <tr>
          <td>URL</td>
          <td>${myArray.html_url}</td>
          </tr>

          <tr>
          <td>Inviter </td>
          <td>${myArray.inviter.login}</td>
          </tr>
          
          <tr>
          <td>Invitee</td>
          <td>${myArray.invitee.login}</td>
          </tr>              
            
          </table>
      
      </div>
      `);  
  
   return viewRepoData;
    }



    setResponseForViewIssues(element,w_id,b_id) {
        var command = element.command;
        var myArray=element.data;

        const viewRepoData = this.createHTMLElement(`
        <div id='${w_id}' class="widget">    
          <h5 class="card-title">Response For Command: ${command} <a class="close" id="${b_id}"><h6>x</h6></a></h5>
           <table class="table table-bordered table-striped table-hover">
            <tr> <td class="tableCellBorder">Issue Number</td>
                 <td class="tableCellBorder">Issue Id</td> 
                 <td class="tableCellBorder">Issue Body</td>
                  <td class="tableCellBorder">Issue Title</td> 
                  <td class="tableCellBorder">Issue State</td> 
            </tr>
    
            ${myArray.map(issue =>
                `<tr> <td class="tableCellBorder"> ${issue.number} </td>
                      <td class="tableCellBorder"> ${issue.id} </td>
                      <td class="tableCellBorder"> ${issue.body} </td>
                      <td class="tableCellBorder"> ${issue.title} </td>
                      <td class="tableCellBorder"> ${issue.state} </td>
                </tr>`                 
                   ).join('')}
    
            </table>
        
        </div>
        `);  
    
     return viewRepoData;
    };
    
    setResponseForViewLatestComment(element,w_id,b_id) {
        var command = element.command;
        var myArray=element.data;


        myArray.forEach(function (element) {
            var utcDate = element.updated_at;
            var localDate = new Date(utcDate);
            console.log(localDate);
        });

        var lastComment = [];
        lastComment = myArray[0];
        for (var i = 1; i < myArray.length; i++) {
            if (myArray[i].updated_at > lastComment.updated_at) {
                lastComment = myArray[i];
            }
        }
        console.log("Last Updated Comment : ", lastComment.body);

        var lastUpdatedInUTCFormat = lastComment.updated_at;
        var lastUpdatedInISTFormat = new Date(lastUpdatedInUTCFormat);
        const viewRepoData = this.createHTMLElement(`
        <div id='${w_id}' class="widget">    
            <h5 class="card-title">Response For Command: ${command} <a class="close" id="${b_id}"><h6>x</h6></a></h5>
            
  
            <table class="table table-bordered table-striped table-hover">
            <tr>
            <td>Comment Id</td>
            <td>${lastComment.id}</td>
            </tr>
  
            <tr>
            <td>Comment Body </td>
            <td>${lastComment.body}</td>
            </tr>
            
            <tr>
            <td>URL</td>
            <td>${lastComment.html_url}</td>
            </tr>  
            
            <tr>
            <td>Last Updated At</td>
            <td>${lastUpdatedInISTFormat}</td>
            </tr> 
              
            </table>
        
        </div>
        `);    
     return viewRepoData;
    };

    setResponseInWidget(element) {
        debugger;
        var operationType=element.type;
        var myArray=element.data; 
        var widgetId="widget_1";
        var buttonId="button_1";
        var tablearea = document.getElementById('myWidget'); 
        var statusCode = element.data.status;  

        if (tablearea.hasChildNodes()) {
            var newChildId = tablearea.childNodes.length + 1;
            widgetId = "widget_" + newChildId;
            buttonId = "button_" + newChildId;
        }

        if (operationType == "create-repo") {
            if (statusCode == 201) {         
                
                if(! tablearea.hasChildNodes()){
                    tablearea.appendChild(this.setResponseForCreateRepo(element,widgetId,buttonId));
                }else{
                    tablearea.insertBefore(this.setResponseForCreateRepo(element,widgetId,buttonId),tablearea.childNodes[0]);
                }

            } //201 ends
            else if (statusCode == 422) {
                // var tablearea = document.getElementById('myWidget');
                // var table = document.createElement('table');
                // table.setAttribute("id", "command_result");


                // var tr = document.createElement('tr');
                // var td = document.createElement('td');
                // td.style.border = "1px solid blue";

                // var errorMsg = document.createTextNode("Repo with this name already exists");  //error msg
                // td.appendChild(errorMsg);
                // tr.appendChild(td);

                // table.appendChild(tr);
                // table.style.border = "3px solid black";
                // tablearea.appendChild(table);
            }


        } //create-repo ends

        else if (operationType == "createIssue") {
            if (statusCode == 201) {
                    if(! tablearea.hasChildNodes()){
                        tablearea.appendChild(this.setResponseForCreateIssue(element,widgetId,buttonId));
                }else{
                    tablearea.insertBefore(this.setResponseForCreateIssue(element,widgetId,buttonId),tablearea.childNodes[0]);
                }
            }
        }
        else if (operationType == "closeIssue") {
            if (statusCode == 200) {

                if(! tablearea.hasChildNodes()){
                    tablearea.appendChild(this.setResponseForCloseIssue(element,widgetId,buttonId));
            }else{
                tablearea.insertBefore(this.setResponseForCloseIssue(element,widgetId,buttonId),tablearea.childNodes[0]);
            }
            }
        }

        if (operationType == "addComment") {
            if (statusCode == 201) {
                if(! tablearea.hasChildNodes()){
                    tablearea.appendChild(this.setResponseForAddComment(element,widgetId,buttonId));
            }else{
                tablearea.insertBefore(this.setResponseForAddComment(element,widgetId,buttonId),tablearea.childNodes[0]);
            }                                               
            }
        }

        

        if (operationType == "addCollaborator") {
            if (statusCode == 201) {
                debugger;                          
                if(! tablearea.hasChildNodes()){
                    tablearea.appendChild(this.setResponseForAddCollaborator(element,widgetId,buttonId));
            }else{
                tablearea.insertBefore(this.setResponseForAddCollaborator(element,widgetId,buttonId),tablearea.childNodes[0]);
            }     
            }
        }

        else if (operationType == "viewIssues") {   //View Issues
            debugger;
            if (statusCode == 200) {
                if(! tablearea.hasChildNodes()){
                    tablearea.appendChild(this.setResponseForViewIssues(element,widgetId,buttonId));
                }else{
                    tablearea.insertBefore(this.setResponseForViewIssues(element,widgetId,buttonId),tablearea.childNodes[0]);
                }
            }
        }
        else if (operationType == "getLatestComment") {
            
                if(! tablearea.hasChildNodes()){
                    tablearea.appendChild(this.setResponseForViewLatestComment(element,widgetId,buttonId));
                }else{
                    tablearea.insertBefore(this.setResponseForViewLatestComment(element,widgetId,buttonId),tablearea.childNodes[0]);
                }
        }
        //generic code for all operations to push new widget down
       


    }

}