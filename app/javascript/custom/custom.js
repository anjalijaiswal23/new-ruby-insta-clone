import * as FilePond from 'filepond';

// Get a reference to the file input element
const inputElement = document.querySelector("#post-images");

import FilePondPluginImagePreview from 'filepond-plugin-image-preview';


import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
FilePond.registerPlugin(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
    );


// Create a FilePond instance
const pond = FilePond.create(inputElement,{
    credits:{},
    storeAsFile:true,
    allowMultiple:true,
    allowReorder: true,
    acceptedFileTypes: ['image/png'],

});
