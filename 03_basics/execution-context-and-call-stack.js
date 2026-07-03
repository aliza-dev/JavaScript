// JAVASCRIPT CODE EXECUTION + CALL STACK

// ---------- Global Execution Context ----------
// - Every JS file starts running inside the Global Execution Context (GEC)
// - This is created first, before anything else runs
// - Everything in the code lives inside this context


// ---------- Phase 1: Memory Creation Phase ----------
// - JS scans the whole code first, before running it
// - All variables are stored in memory with value "undefined"
// - All functions are stored in memory with their FULL definition (not undefined)
// - This phase happens every single time, no exceptions
// - This is also why "hoisting" works in JavaScript


// ---------- Phase 2: Execution Phase ----------
// - Now the actual code runs line by line
// - Variables finally get their real values (replacing "undefined")
// - When a function is called, a brand new separate box is created for it


// ---------- What happens when a function runs ----------
// - Every time a function executes, a NEW Execution Context is created
// - This is called a "sandbox" for that function
// - Each sandbox has its own:
//     1) Variable Environment (its own memory space)
//     2) Execution Thread (its own line-by-line running)
// - Multiple function calls = multiple separate sandboxes, one for each call


// ---------- Call Stack ----------
// - JavaScript keeps track of all these execution contexts using a Call Stack
// - Global Execution Context sits at the bottom of the stack
// - Every function call adds a new context on top of the stack
// - When a function finishes (or returns), its sandbox is removed from the stack
// - JavaScript always runs on a single thread, using this stack to manage everything


// ---------- Key Point ----------
// - Function's return value goes back to the Global Execution Context
// - Once a function is done executing, its sandbox is deleted from memory