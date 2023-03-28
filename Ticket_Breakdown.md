# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### **Ticket 1: Allow Facilities to save custom IDs for Agents**

**Description:**
Update the Agents table in the database to include a new field for custom IDs. Allow Facilities to input and save their own custom IDs for each Agent they work with.

**Acceptance Criteria:**

- A new field for custom IDs is added to the Agents table in the database
- The API is updated to allow Facilities to input and save custom IDs for Agents
- The custom IDs are displayed on the Facility's dashboard and are visible when generating reports
- The custom IDs are unique and indexed in the database to ensure consistency

**Effort Estimate:** 8 hours

**Implementation Details:**

- Update the Agents table in the database to include a new column for custom IDs
- Update the API to allow Facilities to input and save custom IDs
- Update the client-side dashboard to display the custom IDs for each Agent
- Update the generateReport function to use the custom IDs instead of the internal database IDs

### **Ticket 2: Update getShiftsByFacility function to return custom Agent IDs**

**Description:**
Update the getShiftsByFacility function to include the custom IDs for Agents in the Shifts returned.

**Acceptance Criteria:**

- The getShiftsByFacility function includes the custom IDs for Agents in the Shifts returned
- The custom IDs are displayed in the Shifts list on the Facility's dashboard

**Effort Estimate:** 4 hours

**Implementation Details:**

- Modify the getShiftsByFacility function to include the custom IDs for Agents
- Update the client-side dashboard to display the custom IDs for Agents in the Shifts list

### **Ticket 3: Update generateReport function to use custom Agent IDs**

**Description:**
Update the generateReport function to use the custom IDs for Agents when generating reports for Facilities.

**Acceptance Criteria:**

- The generateReport function uses the custom IDs for Agents when generating reports for Facilities
- The custom IDs are displayed on the report instead of the internal database IDs

**Effort Estimate:** 4 hours

**Implementation Details:**

- Modify the generateReport function to use the custom IDs for Agents instead of the internal database IDs
- Update the PDF template to include the custom IDs

### **Ticket 4: Add validation to ensure custom IDs are unique**

**Description:**
Add validation to ensure that custom IDs entered by Facilities are unique.

**Acceptance Criteria:**

- Custom IDs entered by Facilities are checked for uniqueness
- If a duplicate custom ID is entered, an error message is displayed and the ID is not saved

**Effort Estimate:** 2 hours

**Implementation Details:**

- Add a unique constraint to the custom ID column in the Agents table in the database
- Add validation to the API to check for uniqueness before saving custom IDs entered by Facilities

### **Ticket 5: Update documentation to include custom ID functionality**

**Description:**
Update the documentation to include instructions for Facilities on how to use custom IDs and how they are displayed in reports.

**Acceptance Criteria:**

- The documentation is updated to include instructions for Facilities on how to use custom IDs and how they are displayed in reports

**Effort Estimate:** 2 hours

**Implementation Details:**

- Update the documentation to include instructions on how to use custom IDs
- Update the documentation to explain how custom IDs are displayed in reports
