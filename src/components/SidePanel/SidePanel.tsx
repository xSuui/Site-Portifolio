import React, { CSSProperties, ReactNode, useMemo } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import "./SidePanel.style.css";

export interface SidePanelProps {
  direction?: "right" | "left";
  size?: "normal" | "large";
  open: boolean;
  changeOpen: (open: boolean) => void;
  children: ReactNode;
  className?: string;
}

export const SidePanel: React.FC<SidePanelProps> = ({
  direction = "left",
  changeOpen,
  open = false,
  children,
  size = "normal",
  className = "",
}) => {
  const sizeValue = size === "large" ? 800 : 350;
  const sizeClassName =
    size === "large" ? "sidepanel-size-large" : "sidepanel-size-normal";
  const positionCloseIcon =
    direction === "left"
      ? "sidepanel-icon-close-right"
      : "sidepanel-icon-close-left";
  const styledSideDrawer = useMemo((): CSSProperties => {
    return {
      zIndex: open ? 1100 : -1,
      opacity: open ? 1 : 0,
      visibility: open ? "visible" : "hidden",
    };
  }, [open]);

  const styledContent = useMemo((): CSSProperties => {
    return {
      position: "relative",
      zIndex: open ? 1100 : -1,
      transform:
        direction === "left"
          ? `translateX(${open ? 0 : -sizeValue}px) translateY(0)`
          : `translateX(${open ? 0 : sizeValue}px) translateY(0)`,
      margin: direction === "left" ? "0 auto 0 0" : "0 0 0 auto",
    };
  }, [direction, open, sizeValue]);

  const styledOverlay = useMemo((): CSSProperties => {
    return {
      opacity: open ? 1 : 0,
      visibility: open ? "visible" : "hidden",
    };
  }, [open]);

  return (
    <div className={`sidepanel ${className}`} style={styledSideDrawer}>
      <div
        className={`sidepanel-content scroll-content ${sizeClassName}`}
        style={styledContent}
      >
        {children}
        <button
          type="button"
          onClick={() => changeOpen(!open)}
          className={`sidepanel-icon-close ${positionCloseIcon}`}
        >
          <IoMdCloseCircleOutline size={24} color="#000" />
        </button>
      </div>

      <span
        className="sidepanel-overlay"
        style={styledOverlay}
        onClick={() => changeOpen(!open)}
      />
    </div>
  );
};
