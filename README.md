```
button {
    border-radius: 28px;
    background-color: var(--blue);
    color: white;
    font-weight: 500;
    font-size: 16px;
    border: none;
    padding: 19px;
    text-align: center;
    box-shadow: 0px 5px 10px 2px hsl(223, 87%, 63%, 23.04%);
    width: 33%;
    cursor: pointer;
    transition: all 0.3 ease-in-out;
    position: relative;
    overflow: hidden;
}

button:hover::after {
    content: "";
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.2;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    position: absolute;
}

```
