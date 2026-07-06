defmodule ZcashExplorerWeb.TransactionController do
  use ZcashExplorerWeb, :controller

  def get_transaction(conn, %{"txid" => txid}) do
    case Zcashex.getrawtransaction(txid, 1) do
      {:ok, tx} ->
        tx_data = Zcashex.Transaction.from_map(tx)
        render(conn, "tx.html", tx: tx_data, page_title: "Zcash Transaction #{txid}")

      {:error, _reason} ->
        conn
        |> put_status(:not_found)
        |> render("not_found.html", txid: txid, page_title: "Transaction Not Found")
    end
  end

  def get_raw_transaction(conn, %{"txid" => txid}) do
    {:ok, tx} = Zcashex.getrawtransaction(txid, 1)
    data = Poison.encode!(tx, pretty: true)

    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, data)
  end
end
