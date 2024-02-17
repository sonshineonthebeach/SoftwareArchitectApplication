#!/usr/bin/env python3

from flask import Flask, request, redirect, url_for
import os
import yfinance as yf

app = Flask(__name__)

def convert_to_millions(value):
    return f"{value / 1e6:.2f}M" if value is not None else "N/A"

def cal_5_year_share_value(current_price, earnings_growth, years=5):
    expected_value_in_5_years = current_price * ((1 + earnings_growth) ** years)
    return expected_value_in_5_years

def get_stock_data(symbol):
    print(f"Fetching data for symbol: {symbol}")
    stock = yf.Ticker(symbol)
    try:
        stock_info = stock.info
        # Convert financial figures to millions where applicable
        net_income_m = convert_to_millions(stock_info.get('netIncomeToCommon'))
        total_revenue_m = convert_to_millions(stock_info.get('totalRevenue'))
        operating_cashflow_m = convert_to_millions(stock_info.get('operatingCashflow'))
        market_cap_m = convert_to_millions(stock_info.get('marketCap'))

        earnings_growth = stock_info.get('earningsGrowth', 0) if stock_info.get('earningsGrowth') else 0
        # projected value in 5 years from now
        value_in_5_years = cal_5_year_share_value(stock_info.get('currentPrice', 0), earnings_growth)

        return {
            "companyName": stock_info.get('shortName'),
            "currentPrice": stock_info.get('currentPrice'),
            "fiftyTwoWeekHigh": stock_info.get('fiftyTwoWeekHigh'),
            "fiftyTwoWeekLow": stock_info.get('fiftyTwoWeekLow'),
            "volume": stock_info.get('volume'),
            "marketCap": market_cap_m,
            "netIncome": net_income_m,
            "totalRevenue": total_revenue_m,
            "operatingCashflow": operating_cashflow_m,
            "forwardPE": stock_info.get('forwardPE'),
            "trailingPE": stock_info.get('trailingPE'),
            "earningsGrowth": earnings_growth,
            "fairValueIn5Years": value_in_5_years,  # Ensure this matches what you use below
        }
    except Exception as e:
        print(f"Error fetching data for {symbol}: {e}")
        return None


# Define the common HTML content
common_html = '''
<h1>Scraping Data Web Application</h1>
<p>This application scrapes stock data from Yahoo Finance</p>
<p>Please enter ticker symbol in the box below:</p>
<p>For example: MSFT, AAPL, etc..</p>
<form action="/echo_user_input" method="POST">
    <input name="user_input">
    <input type="submit" value="Submit!">
</form>
'''

@app.route("/")
def main():
    print("Serving main page...")
    return common_html

@app.route("/echo_user_input", methods=["GET", "POST"])
def echo_input():
    if request.method == "POST":
        input_text = request.form.get("user_input", "").upper()
        stock_data = get_stock_data(input_text)
        
        if stock_data:
            web_output = common_html + f"<p>You entered: {input_text}</p>"
            analysis_string = f'''
            <p><strong>Company Name:</strong> {stock_data['companyName']}</p>
            <p><strong>Current price:</strong> ${stock_data['currentPrice']}</p>
            <p><strong>52-Week High:</strong> ${stock_data['fiftyTwoWeekHigh']}</p>
            <p><strong>52-Week Low:</strong> ${stock_data['fiftyTwoWeekLow']}</p>
            <p><strong>Volume:</strong> {stock_data['volume']}</p>
            <p><strong>Market Cap:</strong> {stock_data['marketCap']}</p>
            <p><strong>Net Income:</strong> {stock_data['netIncome']}</p>
            <p><strong>Total Revenue:</strong> {stock_data['totalRevenue']}</p>
            <p><strong>Operating Cashflow:</strong> {stock_data['operatingCashflow']}</p>
            <p><strong>Forward PE:</strong> {stock_data['forwardPE']}</p>
            <p><strong>Trailing PE:</strong> {stock_data['trailingPE']}</p>
            <p><strong>Earnings Growth:</strong> {stock_data['earningsGrowth']}</p>
            <p><strong>Fair Value In 5 Years Using Earnings Growth Method Is:</strong> ${stock_data["fairValueIn5Years"]:.2f}</p>
            <p><strong>This is not financial advice!!!!! Invest at your own risk!!!!! This is just the price we are buying!!!!!!</strong></p>
            '''
            web_output += analysis_string
            return web_output
        else:
            return common_html + f"<p>Stock data not found for {input_text}. Please enter a valid ticker symbol.</p>"
    else:
        return redirect(url_for('main'))

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    app.run(host='0.0.0.0', port=port, debug=True)
