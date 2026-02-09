export const help = `\n
****************************************************************************\n\
*  Terminal | Rakshika Sharma                                           *\n\
****************************************************************************\n\n\
Use the commands below and enjoy the experience of terminal in web.\n\
    cat[file]           Print file content\n\
    cd[directory]       Change directory\n\
    cls | clear         Clear screen\n\
    date                Print current date and time\n\
    echo[text]          Print text to terminal\n\
    help                List all the commands\n\
    ls                  List all the files and directories\n\
    pwd                 Print Working Directory\n\
    reboot              Restart the terminal\n\
    ./[executable]      Run Executable

The files with .ln extension are executable.`;

export const invalid = "Command not found\nTry help";

export const dir = {
    '~': ['about/', 'contacts/', 'projects/'],
    '~/about': ['mailMe.ln', 'me.txt'],
    '~/contacts': ['github.ln', 'instagram.ln', 'linkedin.ln', 'mail.ln']
}

export const files = {
    '~/about/me.txt': "I am Rakshika Sharma, a passionate software developer currently pursuing a Bachelor's degree in Computer Science & Engineering at the Jk lakshmipat university and semester exchange at IIT Jammu. I specialize in languages such as Python, JavaScript, C, C++.  I thrive in Unix/Linux environments and am dedicated to continuous learning, problem-solving, and leveraging technology to create impactful applications.",
    '~/about/mailMe.ln': 'mailto:rakshikas40@gmail.com',
    '~/contacts/github.ln': 'https://github.com/Rakshika1',
    '~/contacts/instagram.ln': 'https://www.instagram.com/rakshika.hkrrr7/profilecard/?igsh=ejdmMGZkb20weWhu',
    '~/contacts/linkedin.ln': 'https://www.linkedin.com/in/rakshikasharma?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    '~/contacts/mail.ln': 'mailto:rakshikas40@gmail.com',
}