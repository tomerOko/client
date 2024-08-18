import React, { useMemo } from "react";
import styled from "styled-components";
import { images } from "./assets";

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
`;

const Shape = styled.div<{ size: number; top: number; left: number }>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  overflow: hidden;
`;

const Circle = styled(Shape)`
  border-radius: 50%;
`;

const Square = styled(Shape)`
  border-radius: 10px;
`;

const Triangle = styled(Shape)`
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

type ImageKey = keyof typeof images;

const getRandomImage = (): string => {
  const keys = Object.keys(images) as ImageKey[];
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return images[randomKey];
};

interface ShapeData {
  top: number;
  left: number;
  size: number;
}

const getRandomPosition = (
  size: number,
  existingShapes: ShapeData[]
): { top: number; left: number } | null => {
  const maxWidth = window.innerWidth - size;
  const maxHeight = window.innerHeight - size;
  const middleStart = (window.innerWidth - 1000) / 2;
  const middleEnd = middleStart + 1000;

  let top: number, left: number;
  let attempts = 0;
  const maxAttempts = 100;

  do {
    top = Math.random() * maxHeight;
    left = Math.random() * maxWidth;
    attempts++;

    if (attempts > maxAttempts) {
      console.warn(
        "Could not find non-overlapping position after 100 attempts"
      );
      return null;
    }
  } while (
    (left > middleStart - size && left < middleEnd) ||
    existingShapes.some(
      (shape) =>
        !(
          left + size < shape.left ||
          left > shape.left + shape.size ||
          top + size < shape.top ||
          top > shape.top + shape.size
        )
    )
  );

  return { top, left };
};

export const NiceBackground: React.FC = () => {
  const shapes = useMemo(() => {
    const shapeTypes = [Circle, Square, Triangle];
    const numShapes = Math.floor(Math.random() * 3) + 2; // 2 to 4 shapes
    const generatedShapes: ShapeData[] = [];

    return Array.from({ length: numShapes }, (_, i) => {
      const ShapeComponent = shapeTypes[i % 3];
      const size = Math.floor(Math.random() * (500 - 300) + 300);
      const position = getRandomPosition(size, generatedShapes);

      if (position) {
        generatedShapes.push({ ...position, size });
        return (
          <ShapeComponent
            key={i}
            size={size}
            top={position.top}
            left={position.left}
          >
            <StyledImage src={getRandomImage()} alt={`Background ${i + 1}`} />
          </ShapeComponent>
        );
      }
      return null;
    }).filter(Boolean);
  }, []);

  return <BackgroundContainer>{shapes}</BackgroundContainer>;
};
