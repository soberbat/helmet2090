import React, { useContext, useEffect, useRef, useState } from "react";
import { Container } from "./Scene.styled";
import { Scene } from "./class/Scene";
import AppContext from "../../state/AppState/AppContext";

const Environment = () => {
  const rendererWrapper = useRef<HTMLDivElement | null>(null);
  const scene = useRef<Scene | null>(null);

  const { section, setCanScroll, selectedCategory } = useContext(AppContext);

  const setSectionChangeAllowance = (isAllowed: boolean) => {
    setCanScroll(isAllowed);
  };

  useEffect(() => {
    !scene.current &&
      (async () => {
        scene.current = new Scene({
          rendererContainer: rendererWrapper.current,
          setSectionChangeAllowance: setSectionChangeAllowance,
        });

        await scene.current.init();
        scene.current.animate();
      })();
  }, []);

  useEffect(() => {
    section === 1 && scene.current?.animateLeft();
  }, [section]);

  useEffect(() => {
    scene.current?.animateCategoryChange(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    // setTimeout(() => {
    //   (async () => {
    //     const dat = await import("dat.gui");
    //     const gui = new dat.GUI();
    //     // ... rest of the three.js code
    //     // gui.add(scene.current?._model.position, "x", -3, 4, 0.01);
    //     console.log(gui.domElement);
    //     gui.domElement.style.zIndex = "400";
    //     gui.domElement.style.backgroundColor = "blue";
    //     const guiParent = document.querySelector(".ac");
    //     console.log(guiParent);
    //     guiParent.style.zIndex = "2";
    //     console.log(gui.closed);
    //     gui.show();
    //     console.log(gui.parent);
    //     const position = gui.addFolder("moleculepos");
    //     const rotation = gui.addFolder("rotation");
    //     const groupRotation = gui.addFolder("groupRotation");
    //     position.add(scene.current._model.position, "x", -10, 30, 0.001);
    //     position.add(scene.current._model.position, "y", -10, 30, 0.001);
    //     position.add(scene.current._model.position, "z", -10, 30, 0.001);
    //     rotation.add(scene.current._model.rotation, "x", -3, 5, 0.001);
    //     rotation.add(scene.current._model.rotation, "y", -3, 5, 0.001);
    //     rotation.add(scene.current._model.rotation, "z", -3, 5, 0.001);
    //   })();
    // }, 5000);
  }, [scene.current]);
  return <Container ref={rendererWrapper}></Container>;
};

export default Environment;
