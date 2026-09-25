
const data = {
    meta: {
        title: "Kevin"
    },
    header: {
        name: "Kevin Roshan N",
        tagline: "FPGA Engineer",
        // intro: "I build accessible, pixel-perfect, and performant web experiences. Currently focused on simplifying complex interfaces.",
        social: [
            {
                name: "GitHub",
                link: "https://www.github.com/kevinroshann",
                iconPath: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            },
            {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/kevinroshann",
                iconPath: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            },
            {
                name: "Email",
                link: "mailto:kevinroshan17@gmail.com",
                iconPath: "M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-11.174l4.623 5.462zm12.008 9.071h-13.308l5.31-6.559 1.344 1.588 1.344-1.588 5.31 6.559zm-12.008-9.071l-4.623-5.462v11.174l4.623-5.712zm-4.271-6.929h20.575l-10.288 11.188-10.287-11.188z"
            }
        ]
    },
    about: [
        // "Hello! I'm Alex, a software engineer based in San Francisco. I enjoy creating things that live on the internet. My interest in web development started back in 2018 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS is fun!",
        // "Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences."
        "Hello I'm Kevin Roshan. I am pursuing my BTECH in Electronics and Communication Engineering. Expected to pass out in 2027. I am interested in Computer Architectures, Digital Signal Processing and FPGAs. My focus is understanding and create projects and develop skills in those areas."
    ],
    experience: [
        {
            title: "Matlab Intern",
            company: "CUSAT",
            date: "2025 JUNE",
            description: "Explored and studies various areas of matlab and understanding about simulink and matlab interfaces and all. Completed 30 hr course on different aspects of Matlab"
        },
        {
            title: "Verilog Intern",
            company: "Petaera Technology",
            date: "2025 JULY",
            description: "Worked on Verilog projects learnt about cocotb verification. Created a 19 bit processor and verified it using cocotb during the course of internship"
        },
        {
            title: "FPGA/RF intern",
            company: "Asnaviram Networks",
            date: "2026 May - present",
            description: "FPGA based signal processing system design and development"

        }
    ],
    projects: [
        {
            title: "UART Streamed FIR Filter on IceBreaker FPGA",
            description: "Implemented a streamed FIR low-pass filter with UART communication, verified both through Cocotb testbenches and on the IceBreaker FPGA. A noisy signal was transmitted via UART using Python and filtered in hardware.",
            link: "https://github.com/kevinroshann/uart_streamed_fir_filter",
            tech: ["Verilog", "Cocotb", "Python", "UART"]
        },
        {
            title: "DTMF Keyboard",
            description: "Designed a DTMF keyboard system by first developing and validating the implementation in MATLAB, then implementing and testing it on the IceBreaker FPGA board.",
            link: "https://github.com/kevinroshann/dtmf",
            tech: ["Verilog", "MATLAB", "FPGA"]
        },
        {
            title: "Maze Solving Bot using FPGA",
            description: "Developed an FPGA-based maze-solving robot as part of the IIT Bombay e-Yantra competition and implemented the design on a Cyclone IV FPGA.",
            link: "#",
            tech: ["Verilog", "Cyclone IV FPGA", "e-Yantra"]
        },
        {
            title: "32-Bit RISC-V Processor",
            description: "Implemented a multicycle, non-pipelined 32-bit RISC-V processor in Verilog. Currently extending the processor with memory-mapped peripherals.",
            link: "https://github.com/kevinroshann/RISCV",
            tech: ["Verilog", "RISC-V", "Computer Architecture"]
        }
    ],
//     footer: "Designed & Built by Kevin."
};
