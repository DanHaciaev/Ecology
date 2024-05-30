import React, { useState, useEffect } from 'react';
import './Game.css';
import { useDrop, useDrag } from "react-dnd";
import { Link } from 'react-router-dom'

const trash = [
  { id: 1, src: '/black/coffee_bean.png', bin: "food" },
  { id: 2, src: '/black/condiments.png', bin: "food" },
  { id: 3, src: '/black/fish_bone.png', bin: "food" },
  { id: 4, src: '/black/fruit.png', bin: "food" },
  { id: 5, src: '/black/pizza.png', bin: "food" },
  { id: 6, src: '/black/spices.png', bin: "food" },
  { id: 7, src: '/blue/birthday_card.png', bin: "paper" },
  { id: 8, src: '/blue/calendar.png', bin: "paper" },
  { id: 9, src: '/blue/magazine.png', bin: "paper" },
  { id: 10, src: '/blue/newspaper.png', bin: "paper" },
  { id: 11, src: '/blue/notepad.png', bin: "paper" },
  { id: 12, src: '/blue/paper.png', bin: "paper" },
  { id: 13, src: '/green/glass_bottle.png', bin: "glass" },
  { id: 14, src: '/green/glass_crack.png', bin: "glass" },
  { id: 15, src: '/green/glass_jar.png', bin: "glass" },
  { id: 16, src: '/green/light_bulb.png', bin: "glass" },
  { id: 17, src: '/green/vial.png', bin: "glass" },
  { id: 18, src: '/green/vitamin.png', bin: "glass" },
  { id: 19, src: '/red/cutlery.png', bin: "non-recyclable" },
  { id: 20, src: '/red/diaper.png', bin: "non-recyclable" },
  { id: 21, src: '/red/medicine.png', bin: "non-recyclable" },
  { id: 22, src: '/red/tape.png', bin: "non-recyclable" },
  { id: 23, src: '/red/toothbrush.png', bin: "non-recyclable" },
  { id: 24, src: '/red/wipes.png', bin: "non-recyclable" },
  { id: 25, src: '/yellow/bucket.png', bin: "plastic" },
  { id: 26, src: '/yellow/can.png', bin: "plastic" },
  { id: 27, src: '/yellow/milk.png', bin: "plastic" },
  { id: 28, src: '/yellow/mineral_water.png', bin: "plastic" },
  { id: 29, src: '/yellow/plastic_bag.png', bin: "plastic" },
  { id: 30, src: '/yellow/shampoo.png', bin: "plastic" }
];

const containers = [
  { id: 1, src: '/red.png', bin: "non-recyclable" },
  { id: 2, src: '/yellow.png', bin: "plastic" },
  { id: 3, src: '/green.png', bin: "glass" },
  { id: 4, src: '/blue.png', bin: "paper" },
  { id: 5, src: '/black.png', bin: "food" }
];

const Container = ({ photo, onDrop }) => {
  const [{ isDragging }, dropRef] = useDrop({
    accept: "trash",
    drop: (data) => {
      onDrop(photo.id, data);
    },
    collect: (monitor) => ({
      isDragging: monitor.isOver()
    })
  });

  return (
    <div
      ref={dropRef}
      className={isDragging ? "dragging endDrag" : "endDrag"}
      onDragOver={(evt) => evt.preventDefault()}
    >
      <img src={photo.src} alt={'Something went wrong...'} className='container' />
    </div>
  );
};

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // Пока остаются элементы для перемешивания...
  while (0 !== currentIndex) {

    // Выбираем случайный оставшийся элемент...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // И меняем его с текущим элементом.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default function Game() {
  const [draggedElements, setDraggedElements] = useState([]);
  const [correctMoves, setCorrectMoves] = useState(0); // Счетчик правильных перемещений
  const [isError, setIsError] = useState(false); // Состояние ошибки
  const [isSuccess, setIsSuccess] = useState(false); // Состояние успешного завершения игры
  const [randomTrash, setRandomTrash] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const shuffledTrash = shuffle([...trash]);
    const selectedTrash = shuffledTrash.slice(0, 11);
    setRandomTrash(selectedTrash);
  }, []);

  const [{ isDragStart }, dragRef] = useDrag({
    type: "trash",
    item: { type: "trash", data: randomTrash[activeIndex] },
    collect: (monitor) => ({
      isDragStart: monitor.isDragging()
    })
  });

  const handleTrashClick = (index) => {
    setActiveIndex(index);
  };

  const handleDrop = (containerId, data) => {
    const container = containers.find(container => container.id === containerId);
    // if (!container) {
    //   console.error(`Container with id ${containerId} not found!`);
    //   return;
    // }
    const bin = container.bin;
    
    if (data.data.bin === bin) {
      setDraggedElements([...draggedElements, { bin, data }]);
      setCorrectMoves(prevMoves => prevMoves + 1);
      setIsError(false);
      if (correctMoves === 9) {
        setIsSuccess(true);
      }
      
      // Удаляем перенесенный мусор из массива randomTrash
      setRandomTrash(prevRandomTrash => prevRandomTrash.filter(item => item.id !== data.data.id));
      
      // Показываем следующий элемент из массива randomTrash
      setActiveIndex(prevIndex => (prevIndex < 1) ? prevIndex + 1 : prevIndex);
    } else {
      setIsError(true);
      setCorrectMoves(0);
    }
  };
  
  return (
    <div>
      <div className={`Game ${isError ? 'error' : ''}  ${isSuccess ? 'correct' : ''}`}>
        <div className='startDrag'>
          <div className={isDragStart ? "trash dragged" : "trash"} ref={dragRef}>
            {randomTrash.map((photo, index) => (
              <img
                key={photo.id}
                src={photo.src}
                draggable
                alt={'Something went wrong...'}
                className="trash-img"
                style={{
                  cursor: 'grab',
                  zIndex: randomTrash.length - index,
                  opacity: index === activeIndex ? 1 : 0,
                }}
                data-bin={photo.bin}
                onClick={() => handleTrashClick(index)}
              />
            ))}
          </div>
        </div>
        <div className='score'>Correct moves: {correctMoves}</div>
        <div className='container'>
          {containers.map(photo => (
            <Container key={photo.id} photo={photo} onDrop={handleDrop} />
          ))}
        </div>
      </div>
      {isError && <div className='mistake'>
        <img src="/wrong.png" alt="Something went wrong..." style={{ cursor: 'pointer' }} onClick={() => window.location.reload()} />
        <div className='mistakepa'>
        You have disposed of the item in the wrong container.
          <Link to='/instruction/' className='mistakepa'>Click to proceed to the instructions.</Link>
        </div>
      </div>}
      {isSuccess && <div className='success'>
        <img src="/correct.png" alt="Something went wrong..." style={{ cursor: 'pointer' }} onClick={() => window.location.reload()} />
        <p>Congratulations! You have successfully completed the game!</p></div>}
    </div>
  );
}
