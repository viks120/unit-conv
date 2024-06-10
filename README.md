# Flexion Coding Challenge

## Installation

This application is a web-based tool that runs in any modern web browser:

1. **Clone the Repository**
   - Use Git to clone the repository to your local machine:
     ```bash
     git clone https://github.com/viks120/FlexionCodeReview.git
     ```
2. **Access the Application**
   - Navigate to the directory where you cloned the repository.
   - Open the `index.html` file in your web browser to start using the application.
   - If you are using VS code IDE, you can use live server extensions.

## How to Run Application in the Docker

- Use terminal to run:
  ```
  docker build -t flexion-challenge .
  docker run -p 80:80 flexion-challenge
  ```
- Open the `http://localhost/` file in your web browser to start using the application.

## Future Development Tasks

Here are the prioritized development tasks to enhance the application:

### 1. UI Interface

- **Priority**: High
- Develop a more interactive and user-friendly web interface using a framework like React or Angular to improve usability and aesthetics.
- Add bootstap framework to code to support multiple screen sizes.

### 2. Enhance Error Handling and Input Validation

- **Priority**: High
- Improve client-side validation to ensure that all user inputs are valid before processing. This includes validating unit types and numeric inputs.
- Adding pre-populated options based on unit types will assist users in understanding precisely what they need to input.

### 3. Expand Conversion Logic

- **Priority**: Medium
- Add more unit conversion options such as converting between different length and weight units, thereby increasing the tool's utility.

### 4. Add Unit Tests

- **Priority**: Medium
- Implement unit testing using Jest to ensure each function reliably performs as expected, which is crucial for maintaining high-quality code.

### 5. Microservices Conversion for API Integration

- **Priority**: Low
- Convert the application to microservices to enable third-party applications to utilize it.
- Create REST endpoints as per OpenAPI standards.

### 6. Data Storage

- **Priority**: Low
- Add functionality to save previous queries and results with a backend database.
