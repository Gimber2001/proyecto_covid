// Product Constructor
class Persona {
    constructor(name, dni, year) {
        this.name = name;
        this.dni = dni;
        this.year = year;
    }
}

// UI Constructor
class UI {
    addPersona(persona) {
        const productList = document.getElementById('persona-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${persona.name} -
                    <strong>Price</strong>: ${persona.dni} - 
                    <strong>Year</strong>: ${persona.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        personaList.appendChild(element);
    }

    resetForm() {
        document.getElementById('persona-form').reset();
    }

    deletePersona(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Succsssfully', 'success');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Show in The DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        // Insert Message in the UI
        container.insertBefore(div, app);
        // Remove the Message after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// DOM Events
document.getElementById('persona-form')
    .addEventListener('submit', function (e) {

        const name = document.getElementById('name').value,
            dni = document.getElementById('dni').value,
            year = document.getElementById('year').value;

        // Create a new Oject Product
        const persona = new Persona(name, dni, year);

        // Create a new UI
        const ui = new UI();

        // Input User Validation
        if (name === '' || price === '' || year === '') {
            ui.showMessage('Please Insert data in all fields', 'danger');
        }

        // Save Product
        ui.addPersona(persona);
        ui.showMessage('persona Added Successfully', 'success');
        ui.resetForm();

        e.preventDefault();
    });

document.getElementById('persona-list')
    .addEventListener('click', function (e) {
        const ui = new UI();
        ui.deletePersona(e.target);
        e.preventDefault();
    });