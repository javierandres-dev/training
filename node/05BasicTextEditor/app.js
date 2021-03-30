"use stric";

const { fileSaved } = require("./messages");

const readline = require("readline"),
  Messages = require("./messages"),
  Document = require("./document"),
  Directory = require("./directory"),
  dir = new Directory(),
  interface = readline.createInterface(process.stdin, process.stdout),
  tools = `
Commands: :q = Exit, :sa = Save as, :s = Save
_______________________________________________
`,
  screen = `
\t\t========
\t\tText Editor\n
\t\t========
\t\tChoose an option:
\t\t1 New document
\t\t2 Open document
\t\t3 Close editor
`;
const mainScreen = () => {
  process.stdout.write("\033c");
  interface.question(screen, (res) => {
    switch (res.trim()) {
      case "1":
        createFile();
        break;
      case "2":
        openFileInterface();
        break;
      case "3":
        interface.close();
        break;
      default:
        mainScreen();
        break;
    }
  });
};
mainScreen();
const createFile = () => {
  const file = new Document(dir.getPath());
  renderInterface(file);
  readCommands(file);
};
const openFileInterface = () => {
  const file = new Document(dir.getPath());
  dir.getFilesInDir();
  interface.question(Messages.requestFileName, (name) => {
    if (file.exists(name)) {
      openFile(file, name);
    } else {
      console.log(Messages.fileNotFound);
      setTimeout(() => {
        interface.removeAllListeners("line");
        mainScreen();
      }, 2000);
    }
  });
};
const openFile = (file, name) => {
  file.open(name);
  renderInterface(file);
  readCommands(file);
};
const renderInterface = (file, message) => {
  process.stdout.write("\033c");
  file.getName() === ""
    ? console.log(`| Untitled |`)
    : console.log(`| ${file.getName()} |`);
  console.log(tools);
  if (message !== null) console.log(message);
  console.log(file.getContent());
};
const readCommands = (file) => {
  interface.on("line", (input) => {
    switch (input.trim()) {
      case ":sa":
        saveas(file);
        break;
      case ":q":
        interface.removeAllListeners("line");
        mainScreen();
        break;
      case ":s":
        save(file);
        break;
      default:
        file.append(input.trim());
        break;
    }
  });
};
const saveas = (file) => {
  interface.question(Messages.requestFileName, (name) => {
    if (file.exists(name)) {
      console.log(Messages.fileExists);
      interface.question(Messages.replaceFile, (confim) => {
        if (confirm === "y") {
          file.saveas(name);
          renderInterface(file, Messages.fileSaved + "\n");
        } else {
          renderInterface(file, Messages.fileNotSaved + "\n");
        }
      });
    } else {
      file.saveas(name);
      renderInterface(file, Messages.fileSaved + "\n");
    }
  });
};
const save = (file) => {
  if (file.hasName()) {
    file.save();
    renderInterface(file, Messages.fileSaved + "\n");
  } else {
    saveas(file);
  }
};
