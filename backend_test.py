import requests
import sys
from datetime import datetime
import json

class PortfolioAPITester:
    def __init__(self, base_url="https://sandeep-showcase.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"Response: {json.dumps(response_data, indent=2)}")
                except:
                    print(f"Response: {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text}")
                self.failed_tests.append({
                    "test": name,
                    "expected": expected_status,
                    "actual": response.status_code,
                    "response": response.text
                })

            return success, response.json() if success and response.content else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                "test": name,
                "error": str(e)
            })
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        return self.run_test(
            "Root API Endpoint",
            "GET",
            "api/",
            200
        )

    def test_contact_form_submission(self):
        """Test contact form submission"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com",
            "message": "This is a test message from the portfolio contact form."
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "api/contact",
            200,
            data=test_data
        )
        
        if success:
            # Verify response contains expected fields
            required_fields = ['id', 'name', 'email', 'message', 'timestamp']
            for field in required_fields:
                if field not in response:
                    print(f"❌ Missing field in response: {field}")
                    return False
            print("✅ Contact form response contains all required fields")
        
        return success

    def test_get_contact_messages(self):
        """Test retrieving contact messages"""
        return self.run_test(
            "Get Contact Messages",
            "GET",
            "api/contact",
            200
        )

    def test_status_endpoint(self):
        """Test status check endpoint"""
        test_data = {
            "client_name": "Portfolio Test Client"
        }
        
        return self.run_test(
            "Status Check Creation",
            "POST",
            "api/status",
            200,
            data=test_data
        )

    def test_get_status_checks(self):
        """Test retrieving status checks"""
        return self.run_test(
            "Get Status Checks",
            "GET",
            "api/status",
            200
        )

def main():
    print("🚀 Starting Portfolio Backend API Tests")
    print("=" * 50)
    
    # Setup
    tester = PortfolioAPITester()

    # Run tests
    print("\n📡 Testing API Endpoints...")
    
    # Test root endpoint
    tester.test_root_endpoint()
    
    # Test contact form functionality
    tester.test_contact_form_submission()
    tester.test_get_contact_messages()
    
    # Test status endpoints
    tester.test_status_endpoint()
    tester.test_get_status_checks()

    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.failed_tests:
        print("\n❌ Failed Tests:")
        for failure in tester.failed_tests:
            print(f"  - {failure}")
    
    success_rate = (tester.tests_passed / tester.tests_run) * 100 if tester.tests_run > 0 else 0
    print(f"📈 Success Rate: {success_rate:.1f}%")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())