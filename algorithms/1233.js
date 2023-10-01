var removeSubfolders = function(folders) {
    let set = new Set(folders);
    for(let folder of folders) {
        let parentfolder = folder;
        while( parentfolder = parentfolder.substring(0, parentfolder.lastIndexOf('/'))) {
            if(set.has(parentfolder)) set.delete(folder);
        }
    }
    return [...set];
};
