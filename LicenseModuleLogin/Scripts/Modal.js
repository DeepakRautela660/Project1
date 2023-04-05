$(document).ready(function () {
    const modalBtn = document.getElementById('modalBtn');
    modalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const UniProductID = fetchUniProduct();
        printUniProductDetails(UniProductID);
    })
})

function fetchUniProduct() {
    const dropDownMenu = document.getElementById('P_ID');
    const selectedUniProductID = dropDownMenu.value;
    const selectedUniProductName = dropDownMenu.options[dropDownMenu.selectedIndex].text;

    const modalTitle = document.getElementById('exampleModalLabel');
    modalTitle.innerHTML = selectedUniProductName;

    return selectedUniProductID;
}

function printUniProductDetails(UniProductID) {
    const tableHeadings = document.getElementById('tableHeadings');
    tableHeadings.innerHTML = '';

    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    const serialNumberCol = document.createElement('th');
    const paramsCol = document.createElement('th');
    const descriptionCol = document.createElement('th');
    const sampleValuesCol = document.createElement('th');

    serialNumberCol.setAttribute('scope', 'col');
    paramsCol.setAttribute('scope', 'col');
    descriptionCol.setAttribute('scope', 'col');
    sampleValuesCol.setAttribute('scope', 'col');

    serialNumberCol.innerHTML = "SN";
    paramsCol.innerHTML = "Params";
    descriptionCol.innerHTML = "Description";
    sampleValuesCol.innerHTML = "Sample Values";

    if (UniProductID == 101) {
        tableHeadings.appendChild(serialNumberCol);
        tableHeadings.appendChild(paramsCol);
        tableHeadings.appendChild(descriptionCol);
        tableHeadings.appendChild(sampleValuesCol);

        tableBody.innerHTML = `
            <tr>
                <th scope="row">1</th>
                <td>Client Name</td>
                <td>Host port as input</td>
                <td><input type="text" id="clientName" placeholder="eg. 44300" required/></td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>MAC Address</td>
                <td>Mac address of VM</td>
                <td><input type="text" id="macAddress" placeholder="eg. 00-0D-3A-C8-37-D4" required/></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Valid From</td>
                <td>Date when license is issued</td>
                <td><input type="date" id="validFrom" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Valid UpTo</td>
                <td>Date till license is valid</td>
                <td><input type="date" id="ValidUpto" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Number Of Licences</td>
                <td>Quantity of acquired license</td>
                <td><input type="number" id="numberOfLicences" placeholder="eg. 5" required/></td>
            </tr>`;

    }
    else if (UniProductID == 102) {
        tableHeadings.appendChild(serialNumberCol);
        tableHeadings.appendChild(paramsCol);
        tableHeadings.appendChild(sampleValuesCol);
        tableBody.innerHTML = `
            <tr>
                <th scope="row">1</th>
                <td>MAC Address</td>
                <td><input type="text" id="macAddress" placeholder="eg. 00-0D-3A-C8-37-D4" required/></td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Start Date</td>
                <td><input type="date" id="startDate" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>End Date</td>
                <td><input type="date" id="endDate" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>User Limit (Active Sessions Per USer)</td>
                <td><input type="number" id="userLimit" placeholder="eg. 5" required/></td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Product Features</td>
                <td><input type="text" id="productFeatures" placeholder="eg. Campaign management, Wrapup management etc." required/></td>
            </tr>
            <tr>
                <th scope="row">6</th>
                <td>Customer Name</td>
                <td><input type="text" id="customerName" placeholder="eg. MSIL" required/></td>
            </tr>
            <tr>
                <th scope="row">7</th>
                <td>Application Name</td>
                <td><input type="text" id="appName" placeholder="eg. UniCampaign" required/></td>
            </tr>
            <tr>
                <th scope="row">8</th>
                <td>Key</td>
                <td><input type="text" id="userLimit" placeholder="eg. agents" required/></td>
            </tr>
            <tr>
                <th scope="row">9</th>
                <td>Value</td>
                <td><input type="number" id="value" placeholder="eg. 10" required/></td>
            </tr>`;
    }
    else if (UniProductID == 103) {
        tableHeadings.appendChild(serialNumberCol);
        tableHeadings.appendChild(paramsCol);
        tableHeadings.appendChild(sampleValuesCol);
        tableBody.innerHTML = `
            <tr>
                <th scope="row">1</th>
                <td>MAC Address</td>
                <td><input type="text" id="macAddress" placeholder="eg. 00-0D-3A-C8-37-D4" required/></td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Company Name</td>
                <td><input type="text" id="companyName" placeholder="eg. Consilium" required/></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Expiry Date</td>
                <td><input type="date" id="expiryDate" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Number of Licenses (IVR + WebViewerSilent Monitoring & Whisper Coaching</td>
                <td><input type="number" id="noOfLicence" placeholder="eg. 100" required/></td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Number Of Licences (ScreenSharing)</td>
                <td><input type="number" id="numberOfLicencesSS" placeholder="eg. 10" required/></td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Number Of Licences (Buddy Monitoring)</td>
                <td><input type="number" id="numberOfLicencesBM" placeholder="eg. 10" required/></td>
            </tr>`;
    }
    else if (UniProductID == 104) {
        tableHeadings.appendChild(serialNumberCol);
        tableHeadings.appendChild(paramsCol);
        tableHeadings.appendChild(sampleValuesCol);
        tableBody.innerHTML = `
            <tr>
                <th scope="row">1</th>
                <td> User Assign</td>
                <td><input type="text" id="userAssign" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Audio Channel</td>
                <td><input type="text" id="audioChannel" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Video Channel</td>
                <td><input type="text" id="videoChannel" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Co-Browsing Channel</td>
                <td><input type="text" id="browsingChannel" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td> MAC Address</td>
                <td><input type="text" id="macAddress" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">6</th>
                <td>Start Date</td>
                <td><input type="date" id="startDate" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">7</th>
                <td>End Date</td>
                <td><input type="date" id="endDate" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">8<th>
                <td>Select Key</td>
                <td><input type="text" id="selectKey" placeholder="" required/></td>
            </tr>`;
    }
    else if (UniProductID == 105) {
        tableHeadings.appendChild(serialNumberCol);
        tableHeadings.appendChild(paramsCol);
        tableHeadings.appendChild(descriptionCol);
        tableHeadings.appendChild(sampleValuesCol);
        tableBody.innerHTML = `
            <tr>
                <th scope="row">1</th>
                <td>Customer Name</td>
                <td>Customer Name</td>
                <td><input type="text" id="clientName" placeholder="eg. 44300" required/></td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>MAC Address</td>
                <td>Mac address of VM </td>
                <td><input type="text" id="macAddress" placeholder="eg. 00-0D-3A-C8-37-D4" required/></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Valid From</td>
                <td>Date when license is issued</td>
                <td><input type="date" id="validFrom" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Valid UpTo</td>
                <td>Date till license is valid</td>
                <td><input type="date" id="ValidUpto" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Number Of Licences</td>
                <td>Quantity of acquired license</td>
                <td><input type="number" id="numberOfLicences" placeholder="eg. 5" required/></td>
            </tr>`;
    }
    else if (UniProductID == 106) {
        tableHeadings.appendChild(serialNumberCol);
        tableHeadings.appendChild(paramsCol);
        tableHeadings.appendChild(sampleValuesCol);
        tableBody.innerHTML = `
            <tr>
                <th scope="row">1</th>
                <td>Start Date</td>
                <td><input type="date" id="startDate" placeholder="eg. 44300" required/></td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>End Date</td>
                <td><input type="date" id="endDate" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>MAC Addressd</td>
                <td><input type="text" id="macAddress" placeholder="eg. 00-0D-3A-C8-37-D4" required/></td>  
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>CUCM Count</td>
                <td><input type="text" id="cucmCount" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>UCCE Count</td>
                <td><input type="date" id="ucceCount" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">6</th>
                <td>UCCX Count</td>
                <td><input type="text" id="uccxCount" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">7</th>
                <td>Customer ID</td>
                <td><input type="text" id="customerID" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">8</th>
                <td>End Datet</td>
                <td><input type="date" id="endDate" placeholder="" required/></td>
            </tr>`;
    }
    else if (UniProductID == 107) {
        tableHeadings.appendChild(serialNumberCol);
        tableHeadings.appendChild(paramsCol);
        tableHeadings.appendChild(sampleValuesCol);
        tableBody.innerHTML = `
            <tr>
                <th scope="row">1</th>
                <td>Agent Assign</td>
                <td><input type="text" id="agentAssign" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Audio CHannel</td>
                <td><input type="text" id="audioChannel" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Co-Browsing Channels</td>
                <td><input type="text" id="browsingChannel" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>MAC Address</td>
                <td><input type="text" id="macAddress" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Start Date</td>
                <td><input type="date" id="startDate" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">6</th>
                <td>End Date</td>
                <td><input type="date" id="endDate" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">7</th>
                <td>Select Key</td>
                <td><input type="text" id="selectKey" placeholder="" required/></td>
            </tr>`;
    }
    else if (UniProductID == 108) {
        tableHeadings.appendChild(serialNumberCol);
        tableHeadings.appendChild(paramsCol);
        tableHeadings.appendChild(sampleValuesCol);
        tableBody.innerHTML = `
            <tr>
                <th scope="row">1</th>
                <td>MAC Address</td>
                <td><input type="text" id="macAddress" placeholder="eg. 00-0D-3A-C8-37-D4" required/></td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Expiry Date</td>
                <td><input type="date" id="expiryDate" placeholder="" required/></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Company Name</td>
                <td><input type="text" id="companyName" placeholder="Consilium" required/></td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Number Of Licences</td>
                <td><input type="number" id="numberOfLicences" placeholder="eg. 5" required/></td>
            </tr>`;
    }
}