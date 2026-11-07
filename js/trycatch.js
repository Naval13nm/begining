

function sum(a, b) {
    try                             //  if anyhting goes wronmg inside the tru/y block it will jumps to catch block otherwise not
    {
        let c = a + b;
        console.log(c);   //works fine 
        console.log(d); //error jumps to catch block
    }

    catch (error) {
        console.log('error');
    }
}

sum(5, 6)  



try {
    if (typeof word != 'string' || word.trim().length === 0) {
        // 1. The IF condition finds bad data.
        // 2. JavaScript does not crash on its own here.
        // 3. You MUST use 'throw' to manually create a crash.
        throw new Error("Invalid input"); 
    }
    
    // If THROW happens, JavaScript stops instantly and skips this entire area.
    console.log("This line will never run if an error is thrown.");

} catch (error) {
    // 4. The catch block catches the crash caused by the throw.
    return error.message; 
}
