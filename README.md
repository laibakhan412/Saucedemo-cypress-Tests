# Cypress_Saucedemo_Automation 🚀🧪

This repository contains an end-to-end test automation project developed using **Cypress** for the **Saucedemo** web application. This project fulfills the requirements of a QA internship assignment, demonstrating key automation principles such as robust test case design, the Page Object Model (POM) pattern, and comprehensive test reporting.

---

## 📚 Assignment Overview

This project addresses a series of specific automation tasks for the `https://www.saucedemo.com` application:

### ✅ Core Assignment Tasks

-   **Cypress Project Creation:** Successfully initialized and configured a new Cypress project.
-   **Navigation to Saucedemo:** Ensured the test suite reliably navigates to `https://www.saucedemo.com`.
-   **Invalid Login Attempt:**
    -   Implemented a test case to attempt login with incorrect credentials.
    -   Verified and asserted the display of the appropriate error message for failed login.
-   **Successful User Login:**
    -   Developed a test case for successful login with valid user credentials.
    -   Verified that the user is correctly redirected and landed on the application's home page after a successful login.
-   **Product Page Navigation Verification:**
    -   Created a test to click on a product from the home page.
    -   Verified that the browser successfully navigates to and lands on the specific product details page.
-   **Custom Commands for Reusability:**
    -   Implemented custom Cypress commands to encapsulate and reuse common test steps (e.g., login actions), enhancing test readability and maintainability.
-   **Page Object Model (POM) Implementation:**
    -   Utilized the Page Object Model (POM) design pattern for all application pages (Login Page, Home Page, Product Page). This approach separates UI elements and interactions from test logic, making tests more robust and easier to maintain.

---

## 📁 Repository Structure

```

📦 Cypress\_Saucedemo\_Automation/
┣ 📦 cypress/
┃ ┣ 📦 e2e/
┃ ┃ ┗ 📄 saucedemo.cy.js           → Main Cypress test spec file
┃ ┣ 📦 pages/
┃ ┃ ┣ 📄 HomePage.js                → Page object for the application's home screen
┃ ┃ ┣ 📄 LoginPage.js               → Page object for the login screen
┃ ┃ ┗ 📄 ProductPage.js             → Page object for individual product details
┃ ┣ 📦 support/
┃ ┃ ┣ 📄 commands.js                → Custom Cypress commands for reusable actions
┃ ┃ ┣ 📄 e2e.js                     → E2E support file, includes Mochawesome reporter registration
┃ ┃ ┗ 📄 locators.js                → Centralized object containing all UI element locators
┣ 📦 mochawesome-report/
┃ ┗ 📄 index.html                 → The generated HTML test report (after running tests)
┣ 📄 cypress.config.js              → Cypress configuration file (base URL, spec patterns, reporter setup)
┣ 📄 .gitignore                     → Specifies files and folders to be ignored by Git (e.g., node\_modules, reports)
┣ 📄 package-lock.json              → Records exact dependency versions for consistent builds
┣ 📄 package.json                   → Lists project dependencies and defines npm scripts
┗ 📄 README.md                      → Project documentation (this file)

````

---

## 🛠️ Tools & Technologies Used

-   **Cypress** – The leading end-to-end testing framework for web applications.
-   **JavaScript** – The primary programming language used for writing test scripts and page objects.
-   **Node.js** – JavaScript runtime environment required for Cypress and package management.
-   **npm** – Node Package Manager, used for installing and managing project dependencies.
-   **cypress-mochawesome-reporter** – A custom reporter for Cypress that generates interactive and visually appealing HTML test reports.
-   **Page Object Model (POM)** – An industry-standard design pattern applied to enhance test structure, reusability, and maintainability.

---

## ▶️ How to Run the Tests

Follow these simple steps to set up and execute the tests in this project:

#### **1. Clone the Repository**

First, clone this repository to your local machine:

```bash
git clone [https://github.com/laibakhan412/Saucedemo-cypress-Tests.git](https://github.com/laibakhan412/Saucedemo-cypress-Tests.git)
cd Saucedemo-cypress-Tests
````

#### **2. Install Dependencies**

Navigate into the cloned project directory and install all necessary Node.js packages:

```bash
npm install
```

#### **3. Execute Tests**

You have two primary ways to run the tests:

**a) Interactive Mode (Cypress Test Runner):**
To open the Cypress Test Runner, which provides a visual interface for test execution and debugging:

```bash
npx cypress open
```

**b) Headless Mode (for Report Generation):**
To run the tests in a browser environment without a visible UI, which is ideal for CI/CD pipelines and generating the final report:

```bash
npx cypress run
```

-----

## 📊 Viewing the Mochawesome Test Report

After running the tests in **headless mode** (`npx cypress run`), a detailed and interactive HTML report will be automatically generated.

1.  Navigate to the `mochawesome-report` folder within your project directory.
2.  Open the `index.html` file in your preferred web browser.

This report provides a clear overview of test passes/failures, durations, and other valuable insights into the test execution.

-----

## 🤝 Credits

This repository is a result of my dedicated work during my internship program, focusing on practical end-to-end test automation with Cypress. I extend my gratitude to my mentors for their invaluable guidance and support throughout this assignment.

## 📬 Contact

I welcome any queries, feedback, or suggestions regarding this project. Feel free to connect\!

## 📧 Email: klaiba412@gmail.com

## 🌐 LinkedIn: [Laiba Khan](https://www.linkedin.com/in/laiba-khan-955691264/)

-----

**Happy Testing\!** 🧪✨

