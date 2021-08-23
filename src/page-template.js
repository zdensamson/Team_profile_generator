const generateEngineers = (engArray, eng) => {
    if(engArray.length < 1){
        return ''
    }
    return `
    ${engArray.map(({name, id, email, github, }) => {
        return `
        <div class="card col-3">
        <div class="card-header">
          ${eng.getRole()}
        </div>
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">Employee ID: ${id}</p>
          <a href="mailto: ${email}" class="btn btn-primary">${email}</a>
          <a href="https://github.com/${github}" target="_blank" class="btn btn-primary">Github</a>
        </div>
      </div>
        `;
    })
    .join('')}
    `;
};

const generateInterns = (intArray, intern) => {
    if(intArray.length<1) {
        return ''
    }
    return `
    ${intArray.map(({name, id, email, school, }) => {
        return `
        <div class="card col-3">
        <div class="card-header">
          ${intern.getRole()}
        </div>
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">Employee ID: ${id}</p>
          <p class="card-text">School: ${school}</p>
          <a href="mailto: ${email}" class="btn btn-primary">${email}</a>
        </div>
      </div>
        `;
    })
    .join('')}
    `;
};


module.exports = empData => {
    const { manager, engineers, interns} = empData;
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Database</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
    </head>
    <body>
        <div class="container">

            <div class="row justify-content-center manager">
                <!-- MANAGER -->
                <div class="card col-3">
                    <div class="card-header">
                    ${manager.getRole()}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${manager.getName()}</h5>
                        <p class="card-text">Employee ID: ${manager.getId()}</p>
                        <p class="card-text">Office Number: ${manager.officeNumber}</p>
                        <a href="mailto: ${manager.getEmail()}" class="btn btn-primary">${manager.getEmail()}</a>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center engineer">
                ${generateEngineers(engineers, engineers[0])}
            </div>
            <div class="row justify-content-center engineer">
                ${generateInterns(interns, interns[0])}
            </div>

    
        </div>

    </body>
    </html>
  `;
}