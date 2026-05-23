import { createContext, useState } from "react";
import data from "../../data/data.json";

const ExtensionContext = createContext();

function ExtensionProvider({ children }) {
  const [activeTab, setActiveTab] = useState("all");
  const [extensions, setExtensions] = useState(data);

  function handleTabChange(tab) {
    setActiveTab(tab);
  }

  function handleToggleExtension(name) {
    setExtensions((curData) =>
      curData.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext,
      ),
    );
  }

  function handleRemoveExtension(name) {
    setExtensions((curData) => curData.filter((ext) => ext.name !== name));
  }

  return (
    <ExtensionContext.Provider
      value={{
        activeTab,
        extensions,
        handleTabChange,
        handleToggleExtension,
        handleRemoveExtension,
      }}
    >
      {children}
    </ExtensionContext.Provider>
  );
}

export { ExtensionContext, ExtensionProvider };
