import React from 'react';

interface ColorButtonProps {
  color: string;
  onClick: (color: string) => void;
  isSelected: boolean;
}

const ColorButton: React.FC<ColorButtonProps> = ({ color, onClick, isSelected }) => {
  return (
    <button
      onClick={() => onClick(color)}
      style={{
        backgroundColor: isSelected && color === 'washed-black' ? 'black' : color, // Set to black if selected and color is black
        border: `2px solid ${isSelected ? 'black' : 'grey'}`, // Black border if selected
        width: '20px',
        height: '20px',
        borderRadius: '20%', // Make it round
        margin: '0 5px',
        cursor: 'pointer',
      }}
      aria-label={`Select ${color}`}
    />
  );
};

export default ColorButton;