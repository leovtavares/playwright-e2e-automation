# Confluence: Test Strategy Document

**Epic:** `CPT-8992: Career Explorer Revamp`  
**Status:** Approved  
**Author:** QA Engineering Team  

---

## 1. Scope Definition

### 1.1 In-Scope Features (Sprint 42)
- Initial rendering of the Job Roles grid component.
- Category filtering mechanisms (All, Digital Foundations, AI, Cloud, Cyber, Data, Network, Tech Support).
- Pagination logic (`?page=X` URL param binding).
- Empty states and loading skeletons.

### 1.2 Out of Scope
- Certification purchase funnel.
- SEO Metadata validation (Covered in Sprint 40).
- Back-office / CMS data entry.

## 2. Test Approach
A hybrid testing approach will be utilized to validate front-end and back-end contracts.

### 2.1 Functional Testing (BDD)
Verification of acceptance criteria defined in Jira stories. Monitored via Xray/Zephyr test cycles.

### 2.2 Exploratory Testing (SBTM)
Session-Based Test Management (SBTM) will be applied to uncover edge cases regarding race conditions (e.g., rapidly clicking different categories before the previous payload resolves).

### 2.3 API & Integration
Direct validation of the GraphQL / REST endpoints serving the Job Roles data to isolate UI defects from Backend timeouts.

## 3. Environment Details
- **Environment:** Staging / Production
- **Test Data:** Live DB Replica
- **Target Browsers:** Chrome (v121.0), Safari (iOS 17.2)

## 4. Requirements Traceability Matrix (RTM)

| Req ID | Jira Story | Description | Associated Tests |
| :--- | :--- | :--- | :--- |
| REQ-01 | CPT-8993 | User can view all job roles by default | CPT-TC-101 |
| REQ-02 | CPT-8994 | User can filter roles by specific category | CPT-TC-102 |
| REQ-03 | CPT-8995 | UI must handle API failures gracefully | CPT-TC-103 |
