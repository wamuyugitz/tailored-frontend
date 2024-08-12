import React from "react";
import Backdrop from "../backdrop/Backdrop";

export default function Modal({ Component, showModal }) {
  return showModal ? <Backdrop Component={Component} /> : null;
}
