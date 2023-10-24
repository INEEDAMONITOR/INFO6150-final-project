import {useEffect, useRef, useState} from 'react';
import './SubscribeList.css';
const SubscribeList = () => {
    const ref = useRef(null);
    const [nameErr, setNameErr] = useState(null);
    const [emailErr, setEmailErr] = useState(null);
    const [confirmErr, setConfirmErr] = useState(null);
    const [formResult, setFormResult] = useState(null);
    const [isChecked, setIsChecked] = useState(true);
    const [agents, setAgents] = useState();
    useEffect(() => {
        fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true', {
            method: 'GET',
        }).then(res => {
            res.json().then(data => {
                setAgents(data.data);
            });
        });
    });
    const validateEmail = email => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    useEffect(() => {
        const nameEl = document.querySelector('#name');
        const emailEl = document.querySelector('#email');
        const confirmEmailEl = document.querySelector('#confirm-email');
        nameEl.addEventListener('blur', e => {
            if (e.target.value === '') {
                setNameErr('Please input name');
            } else {
                setNameErr(null);
            }
        });
        emailEl.addEventListener('blur', e => {
            if (e.target.value === '') {
                setEmailErr('Please input email');
            } else if (!validateEmail(e.target.value)) {
                setEmailErr('Please check your email');
            } else {
                setEmailErr(null);
            }
        });
        confirmEmailEl.addEventListener('blur', e => {
            if (e.target.value === '') {
                setConfirmErr('Please input emial');
            } else if (!validateEmail(e.target.value)) {
                setConfirmErr('Please check your email');
            } else {
                setConfirmErr(null);
            }
        });
    }, []);

    useEffect(() => {
        document.title = 'Valorant Database - Subscribe';
    }, []);

    const displayForm = e => {
        e.preventDefault();
        const nameEl = document.querySelector('#name');
        const emailEl = document.querySelector('#email');
        const confirmEmailEl = document.querySelector('#confirm-email');
        const updateEl = document.querySelector('#update');
        const favoriteEl = document.querySelector('#favorite');
        let flag = true;
        let emailFlag = true;
        if (nameEl.value === '') {
            setNameErr('Please input name');
            flag = false;
        } else {
            setNameErr(null);
        }

        if (emailEl.value === '') {
            setEmailErr('Please input email');
            emailFlag = false;
        } else if (!validateEmail(emailEl.value)) {
            setEmailErr('Please check your email');
            emailFlag = false;
        } else {
            setEmailErr(null);
        }

        if (confirmEmailEl.value === '') {
            setConfirmErr('Please input emial');
            emailFlag = false;
        } else if (!validateEmail(confirmEmailEl.value)) {
            setConfirmErr('Please check your email');
            emailFlag = false;
        } else {
            setConfirmErr(null);
        }

        if (emailFlag && emailEl.value !== confirmEmailEl.value) {
            setEmailErr("Eamil doesn't match");
            setConfirmErr("Eamil doesn't match");
            flag = false;
        }
        if (!(flag && emailFlag)) {
            return;
        }

        setFormResult(
            <>
                <h1>Subscribe Successfully!</h1>
                <p>Name: {nameEl.value}</p>
                <p>Email: {emailEl.value}</p>
                <p>Receive update email: {updateEl.value}</p>
                <p>Favorite Agents: {favoriteEl.value}</p>
                <button
                    onClick={() => {
                        window.location.reload(false);
                    }}
                >
                    Reload Page
                </button>
            </>
        );
    };

    const form = (
        <form className="form">
            <div>
                <h2>Subscribe</h2>
                <p>All with * are required</p>
            </div>

            <div className="form-left">
                <label htmlFor="name">
                    Name* <div className="error-message">{nameErr}</div>
                </label>
                <input id="name" />
            </div>

            <div className="form-left">
                <label htmlFor="email">
                    Email*<div className="error-message">{emailErr}</div>
                </label>
                <input id="email" />
            </div>

            <div className="form-left">
                <label htmlFor="confirm-emial">
                    Confirm Email*
                    <div className="error-message">{confirmErr}</div>
                </label>
                <input id="confirm-email" />
            </div>

            <div className="form-left-checkbox">
                <label htmlFor="update">Receive update email</label>
                <input
                    type="checkbox"
                    id="update"
                    value={isChecked}
                    defaultChecked={true}
                    onChange={() => {
                        setIsChecked(!isChecked);
                    }}
                />
            </div>

            <div className="form-left">
                <label htmlFor="favorite">Favorite Agents</label>
                <select id="favorite">
                    <option value="" disabled>
                        Please select
                    </option>
                    {agents?.map(item => {
                        return (
                            <option value={item.displayName} key={item.uuid}>
                                {item.displayName}
                            </option>
                        );
                    })}
                </select>
            </div>

            <button
                type="submit"
                className="submit__bottom"
                onClick={displayForm}
            >
                Submit
            </button>
        </form>
    );

    return (
        <div className="form-root" ref={ref}>
            <div className="form-card">{formResult ? formResult : form}</div>
        </div>
    );
};

export default SubscribeList;
