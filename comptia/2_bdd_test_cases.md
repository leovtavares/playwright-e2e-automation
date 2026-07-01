# Zephyr Scale: Test Execution Matrix

**Cycle:** CPT-REL-2.4.1  
**Folder:** `/Explore-Careers/Job-Roles`  
**Execution Date:** Out 24, 2023  

| Test Key | Description (BDD Summary) | Status | Executed By | Defects Linked |
| :--- | :--- | :--- | :--- | :--- |
| **CPT-TC-101** | **Given** the user accesses the /job-roles page<br>**When** the initial API fetch resolves<br>**Then** the job grid should render all roles | ❌ **FAIL** | L. Tavares | `CPT-9045` |
| **CPT-TC-102** | **Given** the user is viewing the "All" category<br>**When** they click on the "Cyber" filter<br>**Then** the URL updates to `?category=Cyber` and the grid re-renders | 🚫 **BLOCKED** | L. Tavares | `CPT-9045` |
| **CPT-TC-103** | **Given** the backend API returns a 500 error<br>**When** the frontend attempts to map the payload<br>**Then** a fallback Error Boundary UI is displayed (No infinite loading) | ❌ **FAIL** | L. Tavares | `CPT-9045` |

---
*Note: TC-102 is blocked because the base component fails to render the initial state, preventing further interaction with the filters.*
