import React from "react";

function GridSvg({classN, isGrid}) {
    return (
        <div>
            {!isGrid && (<svg className={classN} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7.36353 5C6.83309 5 6.32438 5.21071 5.94931 5.58579C5.57424 5.96086 5.36353 6.46957 5.36353 7L5.36353 9C5.36353 9.53043 5.57424 10.0391 5.94931 10.4142C6.32438 10.7893 6.83309 11 7.36353 11L9.36353 11C9.89396 11 10.4027 10.7893 10.7777 10.4142C11.1528 10.0391 11.3635 9.53043 11.3635 9L11.3635 7C11.3635 6.46957 11.1528 5.96086 10.7777 5.58579C10.4027 5.21071 9.89396 5 9.36353 5L7.36353 5ZM7.36353 13C6.83309 13 6.32438 13.2107 5.94931 13.5858C5.57424 13.9609 5.36353 14.4696 5.36353 15L5.36353 17C5.36353 17.5304 5.57424 18.0391 5.94931 18.4142C6.32438 18.7893 6.83309 19 7.36353 19L9.36353 19C9.89396 19 10.4027 18.7893 10.7777 18.4142C11.1528 18.0391 11.3635 17.5304 11.3635 17L11.3635 15C11.3635 14.4696 11.1528 13.9609 10.7777 13.5858C10.4027 13.2107 9.89396 13 9.36353 13L7.36353 13ZM13.3635 7C13.3635 6.46957 13.5742 5.96086 13.9493 5.58579C14.3244 5.21071 14.8331 5 15.3635 5L17.3635 5C17.894 5 18.4027 5.21071 18.7777 5.58579C19.1528 5.96086 19.3635 6.46957 19.3635 7L19.3635 9C19.3635 9.53043 19.1528 10.0391 18.7777 10.4142C18.4027 10.7893 17.894 11 17.3635 11L15.3635 11C14.8331 11 14.3244 10.7893 13.9493 10.4142C13.5742 10.0391 13.3635 9.53043 13.3635 9L13.3635 7ZM13.3635 15C13.3635 14.4696 13.5742 13.9609 13.9493 13.5858C14.3244 13.2107 14.8331 13 15.3635 13L17.3635 13C17.894 13 18.4027 13.2107 18.7777 13.5858C19.1528 13.9609 19.3635 14.4696 19.3635 15L19.3635 17C19.3635 17.5304 19.1528 18.0391 18.7777 18.4142C18.4027 18.7893 17.894 19 17.3635 19L15.3635 19C14.8331 19 14.3244 18.7893 13.9493 18.4142C13.5742 18.0391 13.3635 17.5304 13.3635 17L13.3635 15Z" fill="#DEDEDE"/>
</svg>)}
        {isGrid && (<svg className= {classN} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V9C5 9.53043 5.21071 10.0391 5.58579 10.4142C5.96086 10.7893 6.46957 11 7 11H9C9.53043 11 10.0391 10.7893 10.4142 10.4142C10.7893 10.0391 11 9.53043 11 9V7C11 6.46957 10.7893 5.96086 10.4142 5.58579C10.0391 5.21071 9.53043 5 9 5H7ZM7 13C6.46957 13 5.96086 13.2107 5.58579 13.5858C5.21071 13.9609 5 14.4696 5 15V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H9C9.53043 19 10.0391 18.7893 10.4142 18.4142C10.7893 18.0391 11 17.5304 11 17V15C11 14.4696 10.7893 13.9609 10.4142 13.5858C10.0391 13.2107 9.53043 13 9 13H7ZM13 7C13 6.46957 13.2107 5.96086 13.5858 5.58579C13.9609 5.21071 14.4696 5 15 5H17C17.5304 5 18.0391 5.21071 18.4142 5.58579C18.7893 5.96086 19 6.46957 19 7V9C19 9.53043 18.7893 10.0391 18.4142 10.4142C18.0391 10.7893 17.5304 11 17 11H15C14.4696 11 13.9609 10.7893 13.5858 10.4142C13.2107 10.0391 13 9.53043 13 9V7ZM13 15C13 14.4696 13.2107 13.9609 13.5858 13.5858C13.9609 13.2107 14.4696 13 15 13H17C17.5304 13 18.0391 13.2107 18.4142 13.5858C18.7893 13.9609 19 14.4696 19 15V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H15C14.4696 19 13.9609 18.7893 13.5858 18.4142C13.2107 18.0391 13 17.5304 13 17V15Z" fill="#696974"/>
</svg>)}
        </div>
    );
}

export default GridSvg;