import React from "react";
import './Test.scss';
import { useState } from "react";

function Test() {

    const [active, setActive] = useState(false);
    const handleClick = () => { setActive(false) };

    return (
        <div class="test">
        <div class="options">
        <div  class={ `option ${active && 'active'}` } onClick={handleClick}>
            <div class="shadow"></div>
            <div class="label">
                <div class="icon">
                    <i class="fas fa-walking"></i>
                </div>
                <div class="info">
                    <div class="main">Blonkisoaz</div>
                    <div class="sub">Omuke trughte a otufta</div>
                </div>
            </div>
        </div>
        <div class={ `option ${active && 'active'}` } onClick={handleClick}>
            <div class="shadow"></div>
            <div class="label">
                <div class="icon">
                    <i class="fas fa-snowflake"></i>
                </div>
                <div class="info">
                    <div class="main">Oretemauw</div>
                    <div class="sub">Omuke trughte a otufta</div>
                </div>
            </div>
        </div>
        <div class={ `option ${active && 'active'}` } onClick={handleClick}>
            <div class="shadow"></div>
            <div class="label">
                <div class="icon">
                    <i class="fas fa-tree"></i>
                </div>
                <div class="info">
                    <div class="main">Iteresuselle</div>
                    <div class="sub">Omuke trughte a otufta</div>
                </div>
            </div>
        </div>
        <div class={ `option ${active && 'active'}` } onClick={handleClick}>
            <div class="shadow"></div>
            <div class="label">
                <div class="icon">
                    <i class="fas fa-tint"></i>
                </div>
                <div class="info">
                    <div class="main">Idiefe</div>
                    <div class="sub">Omuke trughte a otufta</div>
                </div>
            </div>
        </div>
        <div class={ `option ${ active && 'active'}` } onClick={handleClick}>
            <div class="shadow"></div>
            <div class="label">
                <div class="icon">
                    <i class="fas fa-sun"></i>
                </div>
                <div class="info">
                    <div class="main">Inatethi</div>
                    <div class="sub">Omuke trughte a otufta</div>
                </div>
            </div>
        </div>
        </div>
        </div>
)
}

export default Test;