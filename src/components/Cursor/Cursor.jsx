import React, { useContext, useEffect, useState } from "react";
import styles from "./Cursor.module.scss";
import clsx from "clsx";
import { GlobalContext } from "../../utils/context/GlobalContext";

const Cursor = ({ className }) => {
  const { cursorPosition, setCursorPosition } = useContext(GlobalContext);
  useEffect(() => {
    const onMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      <div
        id="cursor"
        className={clsx(styles.container, className)}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--clr-text-dark)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-plus"
          style={{ transform: "rotate(-45deg)" }}
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>
    </>
  );
};

export default Cursor;
