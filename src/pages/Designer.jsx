import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import { EditorTabs, FilterTabs, DecalTypes } from "../config/TabSetting"
import { download } from "../assets"
import { downloadCanvasToImage, reader } from "../utils/DesignerUtils"
import { fadeAnimation, slideAnimation } from "../config/MotionSetting";
import { AIPicker, ColorPicker, FilePicker, CustomButton, Tab } from "../components";
import state from "../store"
import styles from './Designer.module.scss'

const Designer = () => {
    const snap = useSnapshot(state);
    const [file, setFile] = useState('');
    const [prompt, setPrompt] = useState('')
    const [generateImg, setGenerateImg] = useState('')
    const [activeEditorTab, setActiveEditorTab] = useState('')
    const [activeFilterTab, setActiveFilterTab] = useState({
        logoShirt: true,
        stylishShirt: false
    })

    const generateTabContent  = () => {
        switch(activeEditorTab) {
            case "colorpicker":
                return <ColorPicker />
            case "filepicker":
                return <FilePicker />
            case "aipicker":
                return <AIPicker />
            default:
                return null
        }
    }

    const handleDecals = (type, result) => {
        const decalType = DecalTypes[type];
    
        state[decalType.stateProperty] = result;
    
        if(!activeFilterTab[decalType.filterTab]) {
          handleActiveFilterTab(decalType.filterTab)
        }
      }
    
      const handleActiveFilterTab = (tabName) => {
        switch (tabName) {
          case "logoShirt":
              state.isLogoTexture = !activeFilterTab[tabName];
            break;
          case "stylishShirt":
              state.isFullTexture = !activeFilterTab[tabName];
            break;
          default:
            state.isLogoTexture = true;
            state.isFullTexture = false;
            break;
        }
    
        // after setting the state, activeFilterTab is updated
    
        setActiveFilterTab((prevState) => {
          return {
            ...prevState,
            [tabName]: !prevState[tabName]
          }
        })
      }

      const readFile = (type) => {
        reader(file)
          .then((result) => {
            handleDecals(type, result);
            setActiveEditorTab("");
          })
      }

    return (
        <AnimatePresence>
            {snap.intro && (
                <>
                <motion.div
                key="custom"
                className={styles.container}
                {...slideAnimation('left')}
                >
                    <div className={styles.container__options}>
                        <div className={styles.container__options__editorTab}>
                            {EditorTabs.map((tab, index) => (
                                <Tab
                                key={tab.name}
                                tab={tab}
                                handleClick={() => {setActiveEditorTab(tab.name)}}
                                >

                                </Tab>
                            ))}

                            {generateTabContent()}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                 className={styles.customButtonContainer}
                 {...fadeAnimation}
                >
                    <CustomButton 
                    type="filled" 
                    title="Image Editor" 
                    handleClick={() => state.intro = false} 
                    customStyles={styles.backButtonContainer__switchScreenButton} 
                    />
                </motion.div>

                <motion.div className={styles.filterTabContainer} {...slideAnimation('up')}>
                    {FilterTabs.map((tab) => (
                        <Tab
                        key={tab.name}
                        tab={tab}
                        isFilterTab
                        isActiveTab={activeFilterTab[tab.name]}
                        handleClick={() => handleActiveFilterTab(tab.name)}
                        >

                        </Tab>
                    ))}
                </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default Designer;