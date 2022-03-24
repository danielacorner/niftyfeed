import React, { useRef, useState } from 'react';
import { 
    TooltipWrapper, 
    TooltipTarget,
    CenterContainer,
    TooltipBox
 } from './Tooltip-style'

const Tooltip = ({ position, text, children, background, styleMe }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const targetRef = useRef(null);

    const showTooltip =  isHovered || isFocused;
   
    const handleClick = (e) => {
        e.preventDefault();
        if(targetRef.current) {
            targetRef.current.blur();
        }
    }

    return (
        <TooltipWrapper>
            <TooltipTarget
                onMouseEnter={(e) => setTimeout(() => setIsHovered(true), 1000)}
                onMouseLeave={(e) => setTimeout(() => setIsHovered(false), 1)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onClick={handleClick}
                ref={targetRef}
                styleMe={styleMe}
                showOnFocus={isFocused}
            >
                {children}
            </TooltipTarget>
            {showTooltip && (
                <CenterContainer position={position}>
                <TooltipBox background={background} position={position}>
                    {text}
                </TooltipBox>
                </CenterContainer>
            )}
    </TooltipWrapper>
    )
}

export default Tooltip