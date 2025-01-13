import React from "react";

const Basics = () => {
    return (
        <>
            <h2>Basics</h2>
            <section>
                <h3>General Terminology</h3>
                <ul>
                    <li><strong>Algorithm</strong>: A step-by-step description to accomplish a task</li>
                    <li><strong>Program</strong>: A list of instructions to be carried out by a computer</li>
                    <li><strong>Program execution/running</strong>: Act of carrying out instructions contained in a program</li>
                    <li><strong>Machine Language</strong>: Series of binary numbers that the computer understands</li>
                    <li><strong>Compiler</strong>: Program that translates a computer program in one language into an equivalent program of another lanugage</li>
                    <li><strong>Executable</strong>: Program that has been translated to machine language that the computer can run</li>
                    <li><strong>Code</strong>: Fragment of a program</li>
                    <li><strong>Hardware</strong>: Physical component of a computer</li>
                    <li><strong>CPU</strong>: Processing unit that executes instructions</li>
                    <li><strong>Memory</strong>: Place to store data about programs or programs themselves temporarily</li>
                    <li><strong>Hard disk</strong>: Place to permanently store information that is larger than the computers memory (RAM)</li>
                    <li><strong>Software</strong>: Collection of programs</li>
                    <li><strong>Operating System</strong>: Environment in which programs can run together. Bridges user, hardeware, and programs</li>
                    <li><strong>Application</strong>: Software running in the operating system</li>
                    <li><strong>Library</strong>: Collection of preexisting code that provides solutions to common programming problems</li>
                    <li><strong>File</strong>: Basic unit of storage on a computer</li>
                    <li><strong>File extension</strong>: Inidication of the type of data in a file</li>
                    <li><strong>Integrated Development Environment (IDE)</strong>: All-in-one enviroinment for creating, editing, compiling and executing program files</li>
                    <li><strong>Console Window</strong>: Text-only window which programs interact with users</li>
                    <li><strong>Input</strong>: Information typed from the user in the console window</li>
                    <li><strong>Output</strong>: Text from program reflected in console window</li>
                    <li><strong>Bit</strong>: Single binary digit</li>
                    <li><strong>Byte</strong>: Sequence of 8 bits</li>
                    <li><strong>kilobyte(KB)</strong>: 2<sup>10</sup> bytes</li>
                    <li><strong>megabyte(MB)</strong>: 2<sup>20</sup> bytes</li>
                    <li><strong>gigabyte(GB)</strong>: 2<sup>30</sup> bytes</li>
                    <li><strong>terabyte(TB)</strong>: 2<sup>40</sup> bytes</li>
                    <li><strong>petabyte(PB)</strong>: 2<sup>50</sup> bytes</li>
                </ul>
            </section>
            <section>
                <h3>Java Terminology</h3>
                <ul>
                    <li><strong>Java Bytecode</strong>: mid-level code in between Java and Machine Code. Cn run on several machines</li>
                    <li><strong>Java Virtual Machine (JVM)</strong>: Theoretical computer (virtual) whose machine language is the set of Java Bytecodes</li>
                    <li><strong>Java Runtime Environment (JRE)</strong>: Program that executes Java bytecodes</li>
                    <li><strong>Class</strong>: Unit of code that is the basic building block of a Java program</li>
                    <li><strong>Method</strong>: Unit of a program (small section of logic) that performs a specific action</li>
                    <li><strong>Statement</strong>: An executable bit of code that represents a command</li>
                    <li><strong>String literal</strong>: Sequence of characters surrounded by double quotes</li>
                    <li><strong>Identifier</strong>: Name used to represent an entity in a program</li>
                    <li><strong>Comment</strong>: Text to inform developers what the code does (ignored by compilers and only used for read-only purposes)</li>
                </ul>
            </section>
            <section>
                <h3>Q & A</h3>
                <strong>What happens when a program is selected?</strong>
                <ol>
                    <li>Instructions are loaded into computer's memory from hard disk</li>
                    <li>Operating system allocates memory for the program to use</li>
                    <li>Instructions to run program go from memory to CPU and executed sequentially</li>
                </ol>

                <strong>How is data stored on a computer?</strong>
                <p>As a sequence of binary integers (0/1). Used as it's simpler to compute 2 states as opposed to 10.</p>

                <strong>What are the steps to running a Java Program?</strong>
                <ol>
                    <li>Use editor to create the file (.java file)</li>
                    <li>Submit the source file to the compiler (Java bytecode)</li>
                    <li>Execute the Java class file (done by JRE)</li>
                </ol>

                <strong>How do I display output to the console?</strong>
                <ul>
                    <li><strong>System.out.print()</strong>: Print string literal context to the console on the same line</li>
                    <li><strong>System.out.println()</strong>: Print string literal contex on the console and end the line thus creating a new line</li>
                </ul>

                <strong>What is the preferred naming convention in Java?</strong>
                <ul>
                    <li><strong>Class names</strong>: Start with a capital letter and each word following afterwards (no space)</li>
                    <li><strong>Method/variable names</strong>: Start with lower case letter and each word following has upper case</li>
                    <li><strong>Constant names</strong>: All uppercase letters with underscores separating words</li>
                </ul>
            </section>
            <section>
                <h2>Resources</h2>
                <em>Building Java Programs, a Back to Basics Apporach 5e</em> by <strong>Stuart Reges</strong> and <strong>Marty Stepp</strong>
            </section>
        </>
    )
}

export default Basics;