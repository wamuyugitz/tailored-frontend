# Tailored Educational Platform Frontend

## Overview

This project implements the frontend for a comprehensive educational platform catering to both students and tutors. It provides a user-friendly interface for managing courses, assignments, grades, and other related activities. The platform aims to enhance the learning and teaching experience by facilitating efficient communication and organization of educational materials.

### Features

- **Dashboard**: View an overview of current courses, assignments, and grades.
- **Courses**: Browse, enroll in, and manage courses with detailed information and resources.
- **Assignments**: Access and submit assignments with feedback from tutors.
- **Grades**: Monitor progress and view grades for completed coursework.
- **Pupils (Tutor-specific)**: Manage student enrollments, progress, and performance.
- **Marks (Tutor-specific)**: Track and manage student performance in assessments.
- **Offline Contents**: Access offline resources and manage offline learning activities.
- **Settings**: Customize profile details and preferences.
- **Logout**: Securely log out from the platform.

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **React Router DOM**: For declarative routing in the application.
- **Redux**: State management for handling user authentication and global application state.
- **Material-UI**: Component library for designing responsive and accessible UI components.
- **CSS Modules**: Local scoped styling for modular and maintainable CSS.

## Folder Structure

Based on the detailed file structure you've provided, here's an organized and annotated overview for your project's frontend:

---

## Frontend File Structure Overview

src/
│
├── assets/
│ └── img/
│ └── (image files)
│
├── pages/
│ ├── home/
│ │ ├── common/
│ │ │ ├── components/
│ │ │ │ ├── assignments/
│ │ │ │ │ ├── AssignmentCard.css
│ │ │ │ │ └── AssignmentCard.js
│ │ │ │ ├── backdrop/
│ │ │ │ │ ├── Backdrop.css
│ │ │ │ │ └── Backdrop.js
│ │ │ │ ├── coursesCards/
│ │ │ │ │ ├── CoursesCard.css
│ │ │ │ │ └── CoursesCard.js
│ │ │ │ ├── header/
│ │ │ │ │ ├── Header.css
│ │ │ │ │ └── Header.js
│ │ │ │ ├── modals/
│ │ │ │ │ ├── alert/
│ │ │ │ │ │ ├── Alert.css
│ │ │ │ │ │ └── Alert.js
│ │ │ │ │ ├── formEditor/
│ │ │ │ │ │ ├── FormEditor.css
│ │ │ │ │ │ └── FormEditor.js
│ │ │ │ │ └── notifications/
│ │ │ │ │ ├── Notifications.css
│ │ │ │ │ └── Notifications.js
│ │ │ │ ├── screenHeader/
│ │ │ │ │ ├── ScreenHeader.css
│ │ │ │ │ └── ScreenHeader.js
│ │ │ │ ├── screenTab/
│ │ │ │ │ ├── ScreenTab.css
│ │ │ │ │ └── ScreenTab.js
│ │ │ │ └── sidebar/
│ │ │ │ ├── Sidebar.css
│ │ │ │ └── Sidebar.js
│ │ │ └── screens/
│ │ │ ├── assignments/
│ │ │ │ ├── Assignments.css
│ │ │ │ └── Assignments.js
│ │ │ ├── courses/
│ │ │ │ ├── Courses.css
│ │ │ │ └── Courses.js
│ │ │ ├── dashboard/
│ │ │ │ ├── Dashboard.css
│ │ │ │ └── Dashboard.js
│ │ │ ├── grades/
│ │ │ │ ├── Grades.css
│ │ │ │ └── Grades.js
│ │ │ ├── offlineContents/
│ │ │ │ ├── OfflineContents.css
│ │ │ │ └── OfflineContents.js
│ │ │ └── settings/
│ │ │ ├── Settings.css
│ │ │ └── Settings.js
│ │ ├── users/
│ │ │ ├── admin/
│ │ │ │ ├── Admin.css
│ │ │ │ └── Admin.js
│ │ │ ├── students/
│ │ │ │ ├── components/
│ │ │ │ │ ├── calendarProfileDetails/
│ │ │ │ │ │ ├── CalendarProfileDetails.css
│ │ │ │ │ │ └── CalendarProfileDetails.js
│ │ │ │ │ ├── myCourses/
│ │ │ │ │ │ ├── MyCourses.css
│ │ │ │ │ │ └── MyCourses.js
│ │ │ │ │ ├── quickStart/
│ │ │ │ │ │ ├── QuickStart.css
│ │ │ │ │ │ └── QuickStart.js
│ │ │ │ │ └── salutation/
│ │ │ │ │ ├── Salutation.css
│ │ │ │ │ └── Salutation.js
│ │ │ │ ├── screens/
│ │ │ │ │ ├── dashboard/
│ │ │ │ │ │ ├── Dashboard.css
│ │ │ │ │ │ └── Dashboard.js
│ │ │ │ │ ├── grades/
│ │ │ │ │ │ ├── Grades.css
│ │ │ │ │ │ └── Grades.js
│ │ │ │ │ ├── offlineContents/
│ │ │ │ │ │ ├── OfflineContents.css
│ │ │ │ │ │ └── OfflineContents.js
│ │ │ │ │ └── settings/
│ │ │ │ │ ├── Settings.css
│ │ │ │ │ └── Settings.js
│ │ │ └── tutors/
│ │ │ ├── components/
│ │ │ │ ├── activitiesDashboard/
│ │ │ │ │ ├── ActivitiesDashboard.css
│ │ │ │ │ └── ActivitiesDashboard.js
│ │ │ │ ├── coursesLocation/
│ │ │ │ │ ├── CoursesLocation.css
│ │ │ │ │ └── CoursesLocation.js
│ │ │ │ ├── filter/
│ │ │ │ │ ├── Filter.css
│ │ │ │ │ └── Filter.js
│ │ │ │ ├── notificationDashboard/
│ │ │ │ │ ├── NotificationDashboard.css
│ │ │ │ │ └── NotificationDashboard.js
│ │ │ │ ├── overview/
│ │ │ │ │ ├── Overview.css
│ │ │ │ │ └── Overview.js
│ │ │ │ └── totalPupils/
│ │ │ │ ├── TotalPupils.css
│ │ │ │ └── TotalPupils.js
│ │ │ ├── screens/
│ │ │ │ ├── dashboard/
│ │ │ │ │ ├── Dashboard.css
│ │ │ │ │ └── Dashboard.js
│ │ │ │ ├── marks/
│ │ │ │ │ ├── Marks.css
│ │ │ │ │ └── Marks.js
│ │ │ │ ├── pupils/
│ │ │ │ │ ├── Pupils.css
│ │ │ │ │ └── Pupils.js
│ │ │ │ ├── settings/
│ │ │ │ │ ├── Settings.css
│ │ │ │ │ └── Settings.js
│ │ ├── registration/
│ │ │ ├── components/
│ │ │ │ ├── form/
│ │ │ │ │ ├── Form.css
│ │ │ │ │ └── Form.js
│ │ │ │ └── infoPanel/
│ │ │ │ ├── InfoPanel.css
│ │ │ │ └── InfoPanel.js
│ │ │ ├── screens/
│ │ │ │ ├── forgotPassword/
│ │ │ │ │ ├── ForgotPassword.css
│ │ │ │ │ └── ForgotPassword.js
│ │ │ │ ├── login/
│ │ │ │ │ ├── Login.css
│ │ │ │ │ └── Login.js
│ │ │ │ ├── resetPassword/
│ │ │ │ │ ├── ResetPassword.css
│ │ │ │ │ └── ResetPassword.js
│ │ │ │ └── signup/
│ │ │ │ ├── Signup.css
│ │ │ │ └── Signup.js
│ │ ├── Home.css
│ │ └── Home.js
│ │
├── redux/
│ ├── store.js
│ └── features/
│ ├── userSlice.js
│ └── ... (other feature slices)
│
├── App.js
├── App.css
├── index.js
└── index.css

## Getting Started

### Prerequisites

- Node.js and npm/yarn installed on your machine.

### Installation

1. Clone the repository from GitHub:

   ```bash
   git clone <repository-url>
   ```

2. Navigate into the project directory:

   ```bash
   cd tailored-educational-platform-frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

To run the application locally:

```bash
npm start
# or
yarn start
```

The application will start on `http://localhost:3000` by default.

## Usage

- **Login**: Use appropriate credentials for either student or tutor roles.
- **Navigate**: Use the sidebar navigation to explore different sections (Dashboard, Courses, Assignments, Grades, etc.).
- **Interact**: Engage with course materials, assignments, and grades as per your role.
- **Logout**: Click on the profile icon in the header and choose "Logout" to securely log out from the platform.

## Testing

- Unit and integration tests are located in `src` folder alongside components and pages.
- Run tests using:

  ```bash
  npm test
  # or
  yarn test
  ```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/new-feature`).
6. Create a new Pull Request.

This README provides a structured overview of the frontend application, detailing its features, technologies used, folder structure, installation instructions, usage guidelines, testing procedures, contribution guidelines, and license information. Adjust paths and details as per your project's specific structure and requirements.
