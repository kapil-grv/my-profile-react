import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = () => {
    const counters = [
        { value: 15, label: "Projects Delivered" },
        { value: 3, label: "Research Publications" },
        { value: 20, label: "Technologies Mastered" },
        { value: 84, label: "Months of Experience" }
    ];

    return (
        <div id="colorlib-counter" className="colorlib-counters">
            <div className="colorlib-narrow-content">
                <div className="counter-grid">
                    {counters.map((item, index) => (
                        <CounterItem key={index} value={item.value} label={item.label} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const CounterItem = ({ value, label }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const duration = 2500;
            const increment = value / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [inView, value]);

    return (
        <div ref={ref} className="counter-item">
            <span className="colorlib-counter">{count}+</span>
            <span className="colorlib-counter-label">{label}</span>
        </div>
    );
};

export default Counter;