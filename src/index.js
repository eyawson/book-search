const program = require("commander");
const { bookSearch } = require("./api");

program.version("0.0.1").description("Command line book search application");

program
  .command("book <book>")
  .alias("b")
  .description("see a list of 5 books from your query")
  .action((book) => bookSearch(book));

// In order to read all parameters and arguments passed to our program, we have to parse the inputs after the program command
program.parse(process.argv);
