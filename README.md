
# 📌 StudentAppFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17 and Node 20.9.0.

## Prerequisites

- Node.js v20.x (LTS recommended)
- npm v10.x or higher

---

## 🚀 Running Angular Project

### 📡 Development server

- Make Sure Your Backend URL is defined in `environment.ts` as follows
  ```TypeScript
  export const environment = {
    baseEndpointUrl: 'http://localhost:5000',
  };
  ```
- Run `ng serve` or `npm start` for a dev server and Navigate to `http://localhost:4200/` on your browser.
- The application will automatically reload if you change any of the source files.

### 🧱 Code scaffolding

- Run `ng generate component component-name` to generate a new component. 
- You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### 🏗️ Build

- Run `ng build` to build the project.
- The build artifacts will be stored in the `dist/` directory.

### 🧪 Running unit tests

- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
- Test Cases have not been updated For this Project as on 25-05-2025. 

### 🧭 Running end-to-end tests

- Run `ng e2e` to execute the end-to-end tests via a platform of your choice.
- To use this command, you need to first add a package that implements end-to-end testing capabilities.

### 📘 Further help

- To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

## 🌟 Application Features

The **StudentAppFrontend** is an Angular application that provides a UI for managing student records. It supports the following core features:

### 📋 1. Listing Page
- Displays a list of all students.
- Includes UI Buttons to Add, Edit, View, Delete Student Records.
- Accessible from the home route.
- On success, Success Toaster Popup Message is Shown.
- On error, Error Toaster Popup Message is Shown.
- On No Records Found, Info Toaster Popup Message is Shown.

### ➕ 2. Add Student
- Form-based interface for entering student details.
- Validation is only for Student Name in the Backend.
- On success, the new student is added to the listing. Success Toaster Popup Message is Shown.
- On error, Error Toaster Popup Message is Shown.

### ✏️ 3. Edit Student
- Allows editing existing student details.
- Opens a pre-filled form with student data.
- On success, Record is Updated, Saved and Reflected in the listing. Success Toaster Popup Message is Shown.
- On error, Error Toaster Popup Message is Shown.

### 🔍 4. View Student
- Opens a pre-filled form with student data.
- View details of a student in read-only mode.

### 🗑️ 5. Delete Student
- Delete button allows removing a student from the list.
- Confirmation prompts ensure safe deletion.
- On success, Record is Deleted and Removed from the listing. Success Toaster Popup Message is Shown.
- On error, Error Toaster Popup Message is Shown.

---

## 🔁 Feature Flows with Screenshots

### 🧾 1️⃣ Listing Page Flow
- **Route:** `/students`
- **Method:** `GET`
- **Sample Response:**
  ```json
  [
    {
        "_id": "DATABASEID",
        "assignedQuestions": "Q1",
        "name": "Test"
    }
  ]
  ```
- **Function:** Displays all students with add/view/edit/delete options.

#### 📸 Output Screenshot:

![image](https://github.com/user-attachments/assets/e31a7385-24f7-44fd-9a4e-f0f05300ec0b)
![image](https://github.com/user-attachments/assets/25555a96-0eb8-40ed-a68e-cb21f911bfa8)

---

### 🧑‍🎓 2️⃣ Add Student Flow
- **Route:** `/students`
- **Method:** `POST`
- **Payload:**
  ```json
  {
    "name": "Test",
    "age": "",
    "assignedQuestions": "Q1"
  }
  ```
- **Function:** Add a new student with form submission.

#### 📸 Output Screenshot:

![image](https://github.com/user-attachments/assets/6d564f8e-3d80-4ddf-b614-51bb518e6d17)
![image](https://github.com/user-attachments/assets/eab791d5-e90a-40d7-9400-cb5336c3bbf5)
![image](https://github.com/user-attachments/assets/26de0292-83d5-4b8f-82b2-5f999001140b)

---

### 🛠️ 3️⃣ Edit Student Flow
- **Route:** `/students/<string:student_id>`
- **Method:** `PUT`
- **Payload:**
  ```json
  {
    "name": "Test",
    "age": 0,
    "assignedQuestions": "Q1,Q2"
  }
  ```
- **Function:** Edit the selected student’s data. Existing Student Data is Patched From Table Row Record Itself.

#### 📸 Output Screenshot:

![image](https://github.com/user-attachments/assets/8104fb1d-d625-431f-a805-6e45c0768f08)
![image](https://github.com/user-attachments/assets/984fc925-84c9-47c9-b83c-a0da51dc7c36)
![image](https://github.com/user-attachments/assets/4923375f-4b8f-4f32-bcb6-40f60ad2692e)
![image](https://github.com/user-attachments/assets/7b94ec30-6cab-4b8e-859c-ed9b48555dce)

---

### 🔍 4️⃣ View Flow

- **Route:** `/students`
- **Method:** `GET`
- **Sample Response:**
  ```json
  [
    {
        "_id": "DATABASEID",
        "assignedQuestions": "Q1",
        "name": "Test"
    }
  ]
  ```
- **Function:** View student Detail. Existing Student Data is Patched From Table Row Record Itself.

#### 📸 Output Screenshot:

![image](https://github.com/user-attachments/assets/7d5b9533-6aa6-49ad-88e9-2eb8ed36e427)
![image](https://github.com/user-attachments/assets/66726cfd-b3e3-4a5b-9eee-42be89faf916)

---

### 🗑️ 5️⃣ Delete Flow
- **Route:** `/students/<string:student_id>`
- **Method:** `DELETE`
- **Sample Response:**
  ```json
  {
    "message": "Deleted"
  }
  ```
- **Function:** Delete Student Details.

#### 📸 Output Screenshot:

![image](https://github.com/user-attachments/assets/eb1e4611-8429-4cad-8e10-28a2451699de)
![image](https://github.com/user-attachments/assets/f2760803-b313-4392-b009-4ba98f88bd5b)
![image](https://github.com/user-attachments/assets/6285ca3f-1037-4136-8266-cec9b07cd499)

---


## 🧩 Backend Integration

This frontend application communicates with a RESTFUL Backend Service Available at:

➡️ **[Backend Repository: Assignment_06_DevOps](https://github.com/JOYSTON-LEWIS/Assignment_06_DevOps)**

Please ensure the backend service is up and running for the frontend to function correctly.

---

## ✅ Angular Good Practices Implemented

This project follows a number of Angular best practices to ensure clean, maintainable, and scalable code:

### 🧠 Code Structure & Reusability

- **📁 Feature-Based Folder Structure:** Organized modules and components by feature to improve maintainability.
- **🧩 Small, Focused Components:** Each feature is broken into small, reusable components for better readability and testability.
- **🧮 Reusable Functions:** Common logic like null/empty checks and utility conversions are abstracted into helper functions/services.

### 🌐 Constants & Configuration

- **🧾 Centralized Constants:** 
  - **Text strings** used in logic are maintained in a dedicated constants file.
  - **API URLs** and endpoints are managed via environment files or a constants configuration.
- **🔐 Environment-Specific Config:** Different environment files (`environment.ts`, `environment.prod.ts`) are used to separate dev/prod settings cleanly.

### 🧰 Component Reuse & UI Consistency

- **📊 Reusable Material Table Component:** Dynamic table built with Angular Material for consistent layout.
- **💬 Reusable Dialog/Popup Component:** Generic `CommonDialogComponent` used for displaying modals across features.
- **🔤 Reusable Text Input Component:** Standalone `CommonTextComponent` handles label, disabled input and value binding.
- **🖲️ Reusable Button Component:** Standardized button component for primary and secondary actions.
- **🎨 Angular Material + Custom Themes:** Used Angular Material components with theme integration for UI consistency.

### 🔄 State Management & Communication

- **📡 Input/Output Binding:** Components communicate via `@Input()` and `@Output()` for unidirectional data flow.
- **📢 EventEmitter Usage:** Custom events are emitted to parent components using `EventEmitter`, promoting encapsulation.

### 🔍 Code Quality

- **✅ Type Safety with Interfaces:** Most models and responses are typed with `interface` to reduce runtime errors.
- **🧪 Unit-Ready Components:** Component logic is kept isolated from DOM to simplify testing.
- **🚫 Avoided Any:** Type `any` is avoided unless absolutely necessary, promoting strong typing.

---

## 📜 License
This project is licensed under the MIT License.

## 🤝 Contributing
Feel free to fork and improve the scripts! ⭐ If you find this project useful, please consider starring the repo—it really helps and supports my work! 😊

## 📧 Contact
For any queries, reach out via GitHub Issues.

---

🎯 **Thank you for reviewing this project! 🚀**
