import { useEffect, useState } from "react";
import Alert from "../../common/components/modals/alert/Alert";
import FormEditor from "../../common/components/modals/formEditor/FormEditor";
import Notification from "../../common/components/modals/notifications/Notifications";
import Modal from "../../common/components/modals/Modal";
import Sidebar from "../../common/components/sidebar/Sidebar";
import Screen from "./screens/Screen";
import "./Students.css";

export default function Students({ userType }) {
  const [alertType, setAlertType] = useState(null);
  const [formType, setFormType] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Function to handle modal type based on sidebar navigation
  const handleModalType = (type, subtype) => {
    if (type === "alert") {
      setAlertType(subtype);
      setFormType(null); // Reset formType if switching to alert
    } else if (type === "form") {
      setFormType(subtype);
      setAlertType(null); // Reset alertType if switching to form
    }
    setShowModal(true); // Show modal after setting types
  };

  // Render the correct modal component based on alertType or formType
  const renderModalComponent = () => {
    if (alertType) {
      return <Alert alertType={alertType} setShowModal={setShowModal} />;
    } else if (formType) {
      return <FormEditor formType={formType} setShowModal={setShowModal} />;
    } else if (showNotification) {
      return <Notification setShowNotification={setShowNotification} />;
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (showNotification) {
      setShowModal(true); // Show modal when notification is displayed
    } else {
      setShowModal(false); // Hide modal when notification is dismissed
    }
  }, [showNotification]);

  return (
    <div className="students">
      <Sidebar
        userType={userType}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        handleModalType={handleModalType}
      />
      <Screen
        setShowNotification={setShowNotification}
        userType={userType}
        handleModalType={handleModalType}
      />
      <Modal
        Component={renderModalComponent()}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}
